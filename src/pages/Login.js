import React from 'react'
import ImgLogo from '../assets/images/logo/logo.svg'

const Login = () => {
  return (
    <div className="login">
      <div className="login__col"></div>
      <div className="login__col">
        <div className="login-form">
          <div className="login-form__logo">
            <img src={ImgLogo} alt="For Your Sweetheart" />
          </div>
          <div className="login-form__heading">Login</div>
          <form className="login-form__form">
            <div className="login-form__input">
              <div className="login-input login-input--username">
                <input type="text" />
              </div>
            </div>
            <div className="login-form__input">
              <div className="login-input login-input--password">
                <input type="text" />
              </div>
            </div>
            <div className="login-form__button">
              <button type="button" className="form-button">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
