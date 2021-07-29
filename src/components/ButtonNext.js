import React from 'react'
import PropTypes from 'prop-types'
import UseWindowSmall from '../hooks/useWindowSmall'

const ButtonNext = ({dark, onClick, animateCompleted}) => {
  // hooks
  const isWindowSmall = UseWindowSmall()

  const classStyle = () => {
    return dark ? 'button-next button-next--dark' : 'button-next'
  }

  const handleClick = (e) => {
    if (animateCompleted) {
      onClick(e)
    }
  }

  const renderButton = () => {
    if (isWindowSmall) {
      return (
        <button type="button" className={classStyle()} onTouchStart={handleClick}>
          ไปต่อ
        </button>
      )
    } else {
      return (
        <button type="button" className={classStyle()} onClick={handleClick}>
          ไปต่อ
        </button>
      )
    }
  }

  return (
    renderButton()
  )
}

ButtonNext.propTypes = {
  dark: PropTypes.bool,
  onClick: PropTypes.func,
  animateCompleted: PropTypes.bool,
}

ButtonNext.defaultProps = {
  dark: false,
  onClick: () => {},
  animateCompleted: false,
}

export default ButtonNext
