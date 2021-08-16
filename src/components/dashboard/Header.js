import React from 'react'
import PropTypes from 'prop-types'
import ImgLogo from '../../assets/images/logo/logo.svg'
import ButtonLogout from './ButtonLogout'

const Header = ({openConfirmLogout}) => {
  return (
    <div className="app-header app-container">
      <div className="app-header__logo">
        <img src={ImgLogo} className="app-header__logo-img" alt="ฆาตกรบนโต๊ะอาหาร" />
        <span className="app-header__logo-text">ฆาตกรบนโต๊ะอาหาร</span>
      </div>
      <div className="app-header__links">
        <div className="app-header__logout">
          <ButtonLogout onClick={openConfirmLogout} />
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  openConfirmLogout: PropTypes.func,
}

Header.defaultProps = {
  openConfirmLogout: () => {},
}

export default Header
