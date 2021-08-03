import React from 'react'
import ImgLogo from '../../assets/images/logo/logo.svg'

const Header = () => {
  return (
    <div className="app-header app__container">
      <div className="app-header__logo">
        <img src={ImgLogo} className="app-header__logo-img" alt="ฆาตกรบนโต๊ะอาหาร" />
        <span className="app-header__logo-text">ฆาตกรบนโต๊ะอาหาร</span>
      </div>
      <button className="app-header__logout">Logout</button>
    </div>
  )
}

export default Header
