var menubar = require('menubar')
var BrowserWindow = require('browser-window')
var fs = require('fs')
var ipfsd = require('ipfsd-ctl')
var ipc = require('ipc')
var config = require('./config')
var errorPanel = require('./controls/error-panel')

// only place where app is used directly
var IPFS

exports = module.exports = init

function init () {

  // main entry point
  ipfsd.local(function (err, node) {
    if (err) {
      errorPanel(err)
    }

    var mb = menubar({
      dir: __dirname,
      width: config['menu-bar-width'],
      index: 'file://' + __dirname + '/views/menubar.html',
      icon: config['tray-icon']
    })

    mb.on('ready', function () {

      mb.tray.on('drop-files', dragDrop)

      startTray(node)

      if (!node.initialized) {
        initialize(config['ipfs-path'], node)
      }

      // keep the menu the right size
      ipc.on('menu-height', function (height) {
        mb.window.setSize(config['menu-bar-width'], height)
      })
    })

    var startTray = function (node) {
      var poll
      var statsCache = {}

      ipc.on('request-state', function (event) {
        ipfsd.version(function (err, res) {
          if (err) {
            throw err
          }
          ipc.emit('version', res)
        })

        if (node.initialized) {
          ipc.emit('node-status', 'stopped')
        }
      })

      ipc.on('start-daemon', function () {
        ipc.emit('node-status', 'starting')
        node.startDaemon(function (err, ipfsNode) {
          if (err) {
            throw err
          }
          ipc.emit('node-status', 'running')

          poll = setInterval(function () {
            if (mb.window.isVisible()) {
              pollStats(ipfsNode)
            }
          }, 1000)

          IPFS = ipfsNode
        })
      })

      ipc.on('stop-daemon', function () {
        ipc.emit('node-status', 'stopping')
        if (poll) {
          delete statsCache.peers
          ipc.emit('stats', statsCache)
          clearInterval(poll)
          poll = null
        }

        node.stopDaemon(function (err) {
          if (err) {
            throw err
          }
          IPFS = null
          ipc.emit('node-status', 'stopped')
          ipc.emit('stats', statsCache)
        })
      })

      var pollStats = function (ipfs) {
        ipfs.swarm.peers(function (err, res) {
          if (err) {
            throw err
          }
          statsCache.peers = res.Strings.length
          ipc.emit('stats', statsCache)
        })
      }
    }
  })

  // Initalize a new IPFS node

  function initialize (path, node) {
    var welcomeWindow = new BrowserWindow(config.window)

    welcomeWindow.loadUrl('file://' + __dirname + '/views/welcome.html')

    welcomeWindow.webContents.on('did-finish-load', function () {
      ipc.emit('default-directory', path)
    })

    // wait for msg from frontend
    ipc.on('initialize', function (opts) {
      ipc.emit('initializing')
      node.init(opts, function (err, res) {
        if (err) {
          ipc.emit('initialization-error', err + '')
        } else {
          ipc.emit('initialization-complete')
          ipc.emit('node-status', 'stopped')
          fs.writeFileSync(config['ipfs-path-file'], path)
        }
      })
    })
  }
}

exports.getIPFS = function () {
  return IPFS
}

// -- load the controls

var dragDrop = require('./controls/drag-drop')
require('./controls/open-browser')
require('./controls/open-console')
