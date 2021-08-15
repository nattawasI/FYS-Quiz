import React from 'react'
import PropTypes from 'prop-types'

const ButtonLogout = ({onClick}) => {
  // function
  const handleClick = () => {
    onClick()
  }

  return (
    <button
      type="button"
      className="app-button-logout"
      onClick={handleClick}
    >Logout</button>
  )
}

ButtonLogout.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ButtonLogout
