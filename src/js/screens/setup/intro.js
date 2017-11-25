import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Icon from '../../components/view/icon'
import Button from '../../components/view/button'

const styles = {
  base: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundImage: `url('../img/jellyfish-large.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20',
    justifyContent: 'space-between'
  },
  headline: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '38px'
  },
  actions: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    width: '300px',
    marginBottom: '30px'
  },
  icon: {
    display: 'inline',
    color: '#19b5fe',
    marginRight: '10px',
    fontSize: '20px'
  },
  advancedLink: {
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.5)',
    transition: 'color 0.3s ease-in-out',
    ':hover': {
      color: 'rgba(255, 255, 255, 1)'
    }
  }
}

export default class Intro extends Component {
  static propTypes = {
    onInstallClick: PropTypes.func,
    onAdvancedClick: PropTypes.func
  }

  static defaultProps = {
    onInstallClick () {},
    onAdvancedClick () {}
  }

  render () {
    return (
      <div style={styles.base}>
        <span style={styles.headline}>
          Welcome to IPFS
        </span>
        <div style={styles.actions}>
          <Button style={styles.button} onClick={this.props.onInstallClick}>
            <Icon name='download' style={styles.icon} /> Install IPFS
          </Button>
          <a
            key='advanced-link'
            onClick={this.props.onAdvancedClick}
            style={styles.advancedLink}>
            Advanced Options
          </a>
        </div>
      </div>
    )
  }
}
