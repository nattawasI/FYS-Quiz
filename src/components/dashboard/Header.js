import React from 'react'
import ImgLogo from '../../assets/images/logo/logo.svg'
import NavMenu from './NavMenu'
import ButtonLogout from './ButtonLogout'

const Header = () => {
  return (
    <div className="app-header app__container">
      <div className="app-header__logo">
        <img src={ImgLogo} className="app-header__logo-img" alt="ฆาตกรบนโต๊ะอาหาร" />
        <span className="app-header__logo-text">ฆาตกรบนโต๊ะอาหาร</span>
      </div>
      <div className="app-header__links">
        <div className="app-header__nav">
          <NavMenu />
        </div>
        <div className="app-header__logout">
          <ButtonLogout />
        </div>
      </div>
    </div>
  )
}

export default Header
