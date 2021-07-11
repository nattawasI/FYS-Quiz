import React from 'react'
import PropTypes from 'prop-types'
import UseSetFrame from '../utilityhooks/useSetFrame'

const Content = ({ children, bgColor }) => {
  const frameStyle = UseSetFrame()

  const classStyle = () => {
    if (bgColor === 'white') {
      return 'content content--light'
    } else {
      return 'content'
    }
  }

  return (
    <div className={classStyle()}>
      <div className="content__main" style={frameStyle}>{children}</div>
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
  bgColor: PropTypes.string,
}

Content.defaultProps = {
  children: PropTypes.element.isRequired,
  bgColor: 'black',
}

export default Content
