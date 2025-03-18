const { app, Menu, shell } = require('electron')
const logger = require('./common/logger')

/** @type {import('electron').MenuItemConstructorOptions[]} */
const template = [
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      

      { type: 'separator' },
      { role: 'delete' },
      { role: 'minimize' },
      { type: 'separator' },

      { role: 'delete' },

    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },

      { type: 'separator' },

      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () {
          shell.openExternal('https://github.com/ipfs-shipyard/ipfs-desktop')
        }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideOthers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  })

  // // Edit menu
  // template[1].submenu.push(
  //   { type: 'separator' },
  //   {
  //     label: 'Speech',
  //     submenu: [
  //       { role: 'startspeaking' },
  //       { role: 'stopspeaking' }
  //     ]
  //   }
  // )

  // Window menu
  template[3].submenu = [
    { role: 'close' },
    { role: 'minimize' },
    { role: 'zoom' },
    { type: 'separator' },
    { role: 'front' }
  ]
}

if (process.platform === 'darwin') {
  template.unshift({
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  })


  // Window menu
  template[3].submenu = [
    { role: 'close' },
    { role: 'minimize' },
    { role: 'zoom' },
    { type: 'separator' },
    { role: 'front' }
  ]
}

module.exports = function () {
  logger.info('[appMenu] init...')
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  logger.info('[appMenu] init done...')
}
