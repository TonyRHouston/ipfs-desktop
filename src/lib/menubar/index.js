import { Menubar } from 'electron-menubar'
import { logo, store, logger, i18n } from '../../utils'
import { Menu, shell, app } from 'electron'

function getContextMenu ({ launchWebUI, checkForUpdates }) {
  return Menu.buildFromTemplate([
    {
      label: i18n.t('versions'),
      enabled: false
    },
    {
      label: `ipfs-desktop ${require('../../../package.json').version}`,
      click: () => { shell.openExternal('https://github.com/ipfs-shipyard/ipfs-desktop/releases') }
    },
    {
      label: `go-ipfs ${require('../../../package.json').dependencies['go-ipfs-dep']}`,
      click: () => { shell.openExternal('https://github.com/ipfs/go-ipfs/releases') }
    },
    { type: 'separator' },
    {
      label: i18n.t('settings'),
      click: () => { launchWebUI('/settings') }
    },
    {
      label: i18n.t('logsDirectory'),
      click: () => { shell.openItem(app.getPath('userData')) }
    },
    {
      label: i18n.t('configFile'),
      click: () => { shell.openItem(store.path) }
    },
    { type: 'separator' },
    {
      label: i18n.t('checkForUpdates'),
      click: () => { checkForUpdates() }
    },
    {
      label: i18n.t('quit'),
      click: () => { app.quit() }
    }
  ])
}

export default async function (ctx) {
  return new Promise(resolve => {
    const menubar = new Menubar({
      index: `file://${__dirname}/app/index.html`,
      icon: logo('black'),
      tooltip: i18n.t('ipfsNode'),
      preloadWindow: true,
      window: {
        resizable: false,
        fullscreen: false,
        skipTaskbar: true,
        width: 280,
        height: 385,
        backgroundColor: '#0b3a53',
        webPreferences: {
          nodeIntegration: true
        }
      }
    })

    // Cross-Platform Context Menu Extravaganza:
    // - macOS needs to use explicit 'right-click' event
    //   otherwise context menu will show for left click as well
    // - Linux, Windows and the rest seems to be fine with just
    //   setting context menu
    // More: https://electronjs.org/docs/api/tray
    let menu = getContextMenu(ctx)

    if (process.platform === 'darwin') {
      menubar.tray.on('right-click', event => {
        event.preventDefault()
        menubar.hide()
        menubar.tray.popUpContextMenu(menu)
      })
    } else {
      menubar.tray.setContextMenu(menu)
    }

    ctx.menubar = menubar

    ctx.sendToMenubar = (type, ...args) => {
      if (type === 'ipfs.started') {
        menubar.tray.setImage(logo('ice'))
      } else if (type === 'ipfs.stopped') {
        menubar.tray.setImage(logo('black'))
      } else if (type === 'languageUpdated') {
        menubar.tray.setToolTip(i18n.t('ipfsNode'))
        menu = getContextMenu(ctx)

        if (process.platform !== 'darwin') {
          menubar.tray.setContextMenu(menu)
        }
      }

      if (menubar && menubar.window && menubar.window.webContents) {
        menubar.window.webContents.send(type, ...args)
      }
    }

    menubar.window.webContents.on('crashed', event => {
      logger.error('[menubar] crashed: %v', event)
    })

    menubar.window.webContents.on('unresponsive', event => {
      logger.warn('[menubar] unresponsive: %v', event)
    })

    const ready = () => {
      logger.info('[menubar] ready')
      resolve()
    }

    if (menubar.isReady()) ready()
    else menubar.on('ready', ready)
  })
}
