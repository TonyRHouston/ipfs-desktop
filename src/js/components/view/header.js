import React from 'react'
import PropTypes from 'prop-types'

export default function Header (props) {
  return (
    <div className='header'>
      <div>
        <p className='title'>{props.title}</p>
        { props.subtitle !== '' &&
          <p className='subtitle'>{props.subtitle}</p>
        }
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  subtitle: PropTypes.string
}

Header.defaultProps = {
  title: '',
  subtitle: ''
}
