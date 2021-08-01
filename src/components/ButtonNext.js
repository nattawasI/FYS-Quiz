import React from 'react'
import PropTypes from 'prop-types'

const ButtonNext = ({dark, onClick, animateCompleted}) => {

  const classStyle = () => {
    return dark ? 'button-next button-next--dark' : 'button-next'
  }

  const handleClick = (e) => {
    if (animateCompleted) {
      onClick(e)
    }
  }

  return (
    <button type="button" className={classStyle()} onClick={handleClick}>
      ไปต่อ
    </button>
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
