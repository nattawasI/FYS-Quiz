import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {useAdminActionContext} from '../contexts/AdminContext'
import ImgTitle from '../assets/images/page/admin/img_title.svg'
import ImgHumanSleep from '../assets/images/page/admin/img_human_sleep.svg'
import ImgLogo from '../assets/images/logo/logo.svg'
import IconShowPassword from '../assets/images/icon/icon_see_password.svg'
import IconHiddenPassword from '../assets/images/icon/icon_hidden_password.svg'

const Login = () => {
  // router
  const history = useHistory()

  // context
  const {loggedInContext} = useAdminActionContext()

  // state
  const [showPassword, setShowPassword] = useState(false)

  // function
  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleLoggedin = () => {
    loggedInContext(true)
    history.push('/admin')
  }

  // useEffect
  useEffect(() => {
    document.title = 'Login'
  })

  return (
    <div className="login">
      <div className="login__box">
        <div className="login__col login__col--left">
          <div className="login-banner">
            <img src={ImgTitle} className="login-banner__title" alt="ฆาตกรบนโต๊ะอาหาร" />
            <img src={ImgHumanSleep} className="login-banner__body" alt="" />
          </div>
        </div>
        <div className="login__col login__col--right">
          <div className="login-form">
            <div className="login-form__logo">
              <img src={ImgLogo} alt="For Your Sweetheart" />
            </div>
            <div className="login-form__title">Login</div>
            <form className="login-form__form">
              <div className="login-form__input">
                <div className="login-input login-input--username">
                  <input type="text" placeholder="Username" />
                </div>
              </div>
              <div className="login-form__input">
                <div className="login-input login-input--password">
                  <input type={showPassword? 'text': 'password'} placeholder="Password" />
                  <button
                    type="button"
                    className="login-input--password-toggle"
                    onClick={togglePassword}
                  >
                    {
                      showPassword
                      ? <img src={IconHiddenPassword} alt="Show Password" />
                      : <img src={IconShowPassword} alt="Hidden Password" />
                    }
                  </button>
                </div>
              </div>
              <div className="login-form__button">
                <button type="button" className="app-button" onClick={handleLoggedin}>Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
