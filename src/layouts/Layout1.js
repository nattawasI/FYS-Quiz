import React from 'react'
import PropTypes from 'prop-types'
import ButtonBack from '../components/ButtonBack'
import ButtonMute from '../components/ButtonMute'

const Layout1 = (props) => {
  return (
    <div className="layout1">
      <div className="layout1__button layout1__button--back">
        <ButtonBack />
      </div>
      <div className="layout1__button layout1__button--sound">
        <ButtonMute />
      </div>
      <div>{props.children}</div>
    </div>
  )
}

Layout1.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout1
