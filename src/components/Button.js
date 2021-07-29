import React from 'react'
import PropTypes from 'prop-types'
import UseWindowSmall from '../hooks/useWindowSmall'

const Button = (props) => {
  // hooks
  const isWindowSmall = UseWindowSmall()

  const classStyle = () => {
    if (props.color) {
      return `button button--${props.color}${' ' + props.className}`
    } else {
      return `button${' ' + props.className}`
    }
  }

  const handleClick = () => {
    props.onClick()
  }

  const renderButton = () => {
    if (isWindowSmall) {
      return (
        <button type="button" className={classStyle()} onTouchStart={handleClick}>
          { props.children }
        </button>
      )
    } else {
      return (
        <button type="button" className={classStyle()} onClick={handleClick}>
          { props.children }
        </button>
      )
    }
  }

  return (
    renderButton()
  )
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  color: '',
  onClick: () => {}
}

export default Button
