import { Menubar } from 'electron-menubar'
import { logo, store, logger, ConnectionManager, Connection } from '../utils'
import registerHooks from '../hooks'
import { app, ipcMain } from 'electron'

async function initialSetup ({ connManager }) {
  const configs = store.get('configs')
  const defaultConfig = store.get('defaultConfig')

  for (const id of Object.keys(configs)) {
    const conn = new Connection(configs[id], id)

    if (!conn.justApi) {
      await conn.init()
    }

    connManager.addConnection(conn)
  }

  if (defaultConfig) {
    connManager.connect(defaultConfig)
  }
}

export default async function () {
  return new Promise(resolve => {
    const menubar = new Menubar({
      index: `file://${__dirname}/app/index.html`,
      icon: logo('black'),
      tooltip: 'Your IPFS instance',
      preloadWindow: true,
      window: {
        resizable: false,
        fullscreen: false,
        skipTaskbar: true,
        width: 280,
        height: 350,
        backgroundColor: '#ffffff',
        webPreferences: {
          nodeIntegration: true
        }
      }
    })

    const opts = {
      menubar: menubar,
      connManager: new ConnectionManager(),
      send: (type, ...args) => {
        if (menubar && menubar.window && menubar.window.webContents) {
          menubar.window.webContents.send(type, ...args)
        }
      }
    }

    registerHooks(opts)
    initialSetup(opts)

    if (process.env.NODE_ENV === 'development') {
      menubar.window.setAlwaysOnTop(true)
    }

    const ready = () => {
      logger.info('Menubar is ready')
      menubar.tray.setHighlightMode('always')
      resolve()
    }

    ipcMain.on('config.get', () => {
      opts.send('config.changed', store.store)
    })

    ipcMain.on('app.quit', async () => {
      logger.info('Disconnecting all IPFS instances')
      await opts.connManager.disconnectAll()
      logger.info('Done. Quitting app')
      app.quit()
    })

    if (menubar.isReady()) ready()
    else menubar.on('ready', ready)
  })
}
