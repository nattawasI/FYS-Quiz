import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const classStyle = () => {
    if (props.color) {
      return `button button--${props.color}`
    } else {
      return 'button'
    }
  }

  const handleClick = () => {
    props.onClick()
  }

  return (
    <button type="button" className={classStyle()} onClick={handleClick}>
      { props.children }
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  color: '',
  onClick: () => {}
}

export default Button
