/**
 * A splash screen for the application that is shown while the webui is loading.
 *
 * This is to prevent the user from seeing the `Could not connect to the IPFS API` error
 * while we're still booting up the daemon.
 */
const { BrowserWindow } = require('electron')
const getCtx = require('../context')
const i18n = require('i18next')
const logger = require('../common/logger')
const path = require('node:path')

module.exports = async function createSplashScreen () {
  const ctx = getCtx()
  const splashScreen = new BrowserWindow({
    title: 'IPFS Desktop splash screen',
    width: 500,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    show: false
  })

  try {
    await splashScreen.loadFile(path.join(__dirname, '../../assets/pages/splash.html'))
  } catch (err) {
    logger.error('[splashScreen] loadFile failed')
    logger.error(err)
    return
  }

  splashScreen.center()

  try {
    await splashScreen.webContents.executeJavaScript(
      `setHeading("${i18n.t('ipfsIsStarting')}")`
    )
  } catch (e) {
    logger.error(e)
    logger.info('[splashScreen] webContents.executeJavaScript failed')
  }

  ctx.setProp('splashScreen', splashScreen)
}
