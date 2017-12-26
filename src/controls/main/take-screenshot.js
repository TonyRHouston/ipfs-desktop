import {clipboard, ipcMain, globalShortcut} from 'electron'

const settingsOption = 'screenshotShortcut'
const shortcut = 'CommandOrControl+Alt+S'

function handleScreenshot (opts) {
  let {logger, fileHistory, ipfs} = opts

  return (event, image) => {
    let base64Data = image.replace(/^data:image\/png;base64,/, '')

    logger.info('Screenshot taken')

    if (!ipfs()) {
      logger.info('Daemon not running. Aborting screenshot upload.')
      return
    }

    ipfs()
      .add([{
        path: `Screenshot ${new Date().toLocaleString()}.png`,
        content: Buffer.from(base64Data, 'base64')
      }])
      .then((res) => {
        res.forEach((file) => {
          const url = `https://ipfs.io/ipfs/${file.hash}`
          clipboard.writeText(url)
          logger.info('Screenshot uploaded', {path: file.path})
          fileHistory.add(file.path, file.hash)
        })
      })
      .catch(logger.error)
  }
}

export default function (opts) {
  let {send, logger, settingsStore} = opts

  let activate = (value) => {
    if (value === true) {
      globalShortcut.register(shortcut, () => {
        logger.info('Taking Screenshot')
        send('screenshot')
      })
    } else {
      globalShortcut.unregister(shortcut)
    }
  }

  activate(settingsStore.get(settingsOption))
  settingsStore.on(settingsOption, activate)
  ipcMain.on('screenshot', handleScreenshot(opts))
}
