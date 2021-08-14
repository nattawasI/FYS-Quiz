import React from 'react'

const Dialog = ({props}) => {
  return (
    <div className="app-dialog">
      <div className="app-dialog__background"></div>
      <div className="app-dialog__content">
        {
          props.children
        }
      </div>
    </div>
  )
}

export default Dialog
