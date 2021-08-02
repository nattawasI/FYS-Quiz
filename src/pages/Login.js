import React from 'react'
import ImgMain from '../assets/images/page/admin/img_human_sleep.svg'
import ImgLogo from '../assets/images/logo/logo.svg'

const Login = () => {
  return (
    <div className="login">
      <div className="login__col login-banner">
        <img src={ImgMain} alt="ฆาตกรบนโต๊ะอาหาร" />
      </div>
      <div className="login__col">
        <form className="login-form">
          <div className="login-form__logo">
            <img src={ImgLogo} alt="For Your Sweetheart" />
          </div>
          <div className="login-form__heading">Welcome</div>
          <div className="login-form__input">
            <input type="text" />
          </div>
          <div className="login-form__input">
            <input type="text" />
          </div>
          <div className="login-form__button">
            <button type="button">Log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
