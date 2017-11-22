import path from 'path'
import os from 'os'
import fs from 'fs'

import {app} from 'electron'

const isProduction = process.env.NODE_ENV === 'production'
const IPFS_PATH_FILE = path.join(app.getPath('appData'), 'ipfs-electron-app-node-path')

const logoDir = path.resolve(__dirname, '../node_modules/ipfs-logo')
const logoIce = path.resolve(logoDir, 'raster-generated/ipfs-logo-512-ice.png')
const logoMenuBar = path.resolve(logoDir, 'platform-icons/osx-menu-bar.png')
const trayIcon = (os.platform() === 'darwin') ? logoMenuBar : logoIce

const menuBar = {
  dir: __dirname,
  width: 300,
  height: 400,
  index: `file://${__dirname}/views/menubar.html`,
  icon: trayIcon,
  tooltip: 'Your IPFS instance',
  alwaysOnTop: true,
  preloadWindow: true,
  resizable: false,
  skipTaskbar: true,
  webPreferences: {
    nodeIntegration: true,
    webSecurity: false
  }
}

const window = {
  icon: logoIce,
  title: 'IPFS Dashboard',
  autoHideMenuBar: true,
  width: 800,
  height: 500,
  webPreferences: {
    webSecurity: false
  }
}

const ipfsPath = () => {
  let pathIPFS
  try {
    pathIPFS = fs.readFileSync(IPFS_PATH_FILE, 'utf-8')
  } catch (e) {
    pathIPFS = process.env.IPFS_PATH ||
      (process.env.HOME || process.env.USERPROFILE) + '/.ipfs'
  }

  return pathIPFS
}

// -- Window URLs

const currentURL = (name) => `file://${__dirname}/views/${name}.html`

export default {
  menuBar,
  window,
  isProduction,
  'tray-icon': trayIcon,
  'webui-path': '/webui',
  'ipfs-path': ipfsPath(),
  'ipfs-path-file': IPFS_PATH_FILE,
  urls: {
    welcome: currentURL('welcome'),
    settings: currentURL('settings')
  }
}
