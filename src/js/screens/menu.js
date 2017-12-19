import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {ipcRenderer} from 'electron'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import FilesScreen from './menu/files'
import PeersScreen from './menu/peers'
import PinnedScreen from './menu/pinned'
import NodeInfoScreen from './menu/node-info'
import Loader from '../components/view/loader'

const UNINITIALIZED = 'uninitialized'
const RUNNING = 'running'
const STARTING = 'starting'
const STOPPING = 'stopping'

class Menu extends Component {
  state = {
    status: UNINITIALIZED,
    route: 'files',
    connected: false,
    version: null,
    stats: {}
  }

  _onNodeStatus = (event, status) => {
    this.setState({status: status})
  }

  _onStats = (event, stats) => {
    this.setState({stats: stats})
  }

  _onFiles = (event, files) => {
    this.setState({files: files})
  }

  _changeRoute = (route) => {
    this.setState({route: route})
  }

  componentDidMount () {
    // -- Listen to control events
    ipcRenderer.on('node-status', this._onNodeStatus)
    ipcRenderer.on('stats', this._onStats)
    ipcRenderer.on('files', this._onFiles)

    ipcRenderer.send('request-state')
    ipcRenderer.send('request-files')
  }

  componentWillUnmount () {
    // -- Remove control events
    ipcRenderer.removeListener('node-status', this._onNodeStatus)
    ipcRenderer.removeListener('stats', this._onStats)
    ipcRenderer.removeListener('files', this._onFiles)
  }

  _getRouteScreen () {
    if (this.state.status === STARTING || this.state.status === STOPPING) {
      return <Loader key='loader-screen' />
    }

    if (this.state.status !== RUNNING) {
      return (
        <p className='notice'>
          Oh snap, it looks like your node is not running yet.
          Change that by clicking the button on the top right corner.
        </p>
      )
    }

    switch (this.state.route) {
      case 'files':
        return (
          <FilesScreen
            files={this.state.files}
            changeRoute={this._changeRoute} />
        )
      case 'peers':
        return (
          <PeersScreen
            peers={this.state.stats.peers}
            location={this.state.stats.node.location}
            changeRoute={this._changeRoute} />
        )
      case 'pinned':
        return (
          <PinnedScreen
            files={this.state.files}
            changeRoute={this._changeRoute} />
        )
      default:
        return null
    }
  }

  _getScreen () {
    return (
      <div style={{display: 'flex'}}>
        <div className='panel left-panel'>
          {this._getRouteScreen()}
        </div>
        <div className={'panel right-panel' + (this.state.status === RUNNING ? '' : ' translucent')}>
          <NodeInfoScreen
            {...this.state.stats.node}
            running={this.state.status === RUNNING}
            bandwidth={this.state.stats.bw}
            repo={this.state.stats.repo} />
        </div>
      </div>
    )
  }

  render () {
    return (
      <CSSTransition
        className='fade'
        timeout={{ enter: 300, exit: 200 }} >
        {this._getScreen()}
      </CSSTransition>
    )
  }
}

export default DragDropContext(HTML5Backend)(Menu)
