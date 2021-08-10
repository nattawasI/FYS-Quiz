import React from 'react'
import PropTypes from 'prop-types'
import ImgLogo from '../../assets/images/logo/logo.svg'
import NavMenu from './NavMenu'
import ButtonLogout from './ButtonLogout'

const Header = ({activeContent, changeActiveContent}) => {
  return (
    <div className="app-header app__container">
      <div className="app-header__logo">
        <img src={ImgLogo} className="app-header__logo-img" alt="ฆาตกรบนโต๊ะอาหาร" />
        <span className="app-header__logo-text">ฆาตกรบนโต๊ะอาหาร</span>
      </div>
      <div className="app-header__links">
        <div className="app-header__nav">
          <NavMenu
            activeContent={activeContent}
            changeActiveContent={changeActiveContent}
          />
        </div>
        <div className="app-header__logout">
          <ButtonLogout />
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  activeContent: PropTypes.string.isRequired,
  changeActiveContent: PropTypes.func.isRequired,
}

export default Header
