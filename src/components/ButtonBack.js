import React from 'react'
import PropTypes from 'prop-types'

const ButtonBack = ({dark}) => {
  const classStyle = () => {
    return dark ? 'button-back button-back--dark' : 'button-dark'
  }

  return (
    <button type="button" className={classStyle()}>
      ย้อนกลับ
    </button>
  )
}

ButtonBack.propTypes = {
  dark: PropTypes.bool
}

ButtonBack.defaultProps = {
  dark: false
}

export default ButtonBack
