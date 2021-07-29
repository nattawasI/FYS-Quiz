// กลับสู่หน้าเริ่มต้น
import React from 'react'
import PropTypes from 'prop-types'
import UseWindowSmall from '../hooks/useWindowSmall'

const ButtonRestart = ({onClick}) => {
  // hooks
  const isWindowSmall = UseWindowSmall()

  const handleClick = () => {
    onClick()
  }

  const renderButton = () => {
    if (isWindowSmall) {
      return (
        <button type="button" className="button-restart" onTouchStart={handleClick}>
          กลับสู่หน้าเริ่มต้น
        </button>
      )
    } else {
      return (
        <button type="button" className="button-restart" onClick={handleClick}>
          กลับสู่หน้าเริ่มต้น
        </button>
      )
    }
  }

  return (
    renderButton()
  )
}

ButtonRestart.propTypes = {
  onClick: PropTypes.func,
}

ButtonRestart.defaultProps = {
  onClick: () => {},
}

export default ButtonRestart