import React from 'react'
import PropTypes from 'prop-types'
import UseSetFrame from '../utilityhooks/useSetFrame'

const Content = (props) => {
  const frameStyle = UseSetFrame()

  return (
    <div className="content">
      <div className="content__main" style={frameStyle}>{props.children}</div>
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.element.isRequired
}

export default Content
