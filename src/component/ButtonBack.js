import React from 'react'
import PropTypes from 'prop-types'

const ButtonBack = ({dark, to, onClick}) => {
  const classStyle = () => {
    return dark ? 'button-back button-back--dark' : 'button-back'
  }

  const handleClick = () => {
    onClick()
  }

  return (
    <button type="button" className={classStyle()} onClick={handleClick}>
      ย้อนกลับ
    </button>
  )
}

ButtonBack.propTypes = {
  dark: PropTypes.bool,
  path: PropTypes.string,
}

ButtonBack.defaultProps = {
  dark: false,
  path: '',
}

export default ButtonBack
