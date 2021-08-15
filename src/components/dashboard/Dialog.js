import React from 'react'
import PropTypes from 'prop-types'

const Dialog = ({children, onClose}) => {
  // function
  const handleClickBG = () => {
    onClose()
  }

  return (
    <div className="app-dialog">
      <div className="app-dialog__background" onClick={handleClickBG}></div>
      <div className="app-dialog__content">
        { children }
      </div>
    </div>
  )
}

Dialog.protoTypes = {
  onClose: PropTypes.func
}

Dialog.defaultProps = {
  onClose: () => {},
}

export default Dialog
