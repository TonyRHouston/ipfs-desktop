import React from 'react'
import PropTypes from 'prop-types'

export default function Icon (props) {
  return (
    <span className={`icon ti-${props.name}`} />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}
