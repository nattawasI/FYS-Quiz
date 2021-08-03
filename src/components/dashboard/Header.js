import React from 'react'
import ImgLogo from '../../assets/images/logo/logo.svg'

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <img src={ImgLogo} alt="ฆาตกรบนโต๊ะอาหาร" />
        <span className="app-header__logo-text">ฆาตกรบนโต๊ะอาหาร</span>
      </div>
      <a href="#" className="app-header__logout">Logout</a>
    </div>
  )
}

export default Header
