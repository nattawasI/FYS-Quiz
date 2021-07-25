import React from 'react'
import PropTypes from 'prop-types'
import {useSoundActionContext} from '../contexts/SoundContext'

const Button = (props) => {
  // context
  const {playClickSoundContext} = useSoundActionContext()

  const classStyle = () => {
    if (props.color) {
      return `button button--${props.color}${' ' + props.className}`
    } else {
      return `button${' ' + props.className}`
    }
  }

  const handleClick = () => {
    playClickSoundContext()
    props.onClick()
  }

  return (
    <button type="button" className={classStyle()} onClick={handleClick}>
      { props.children }
    </button>
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
