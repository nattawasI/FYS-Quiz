import React, {useState, useEffect} from 'react'
import {
  useHistory,
} from 'react-router-dom'
import axios from 'axios'
import {useDashboardActionContext} from '../../contexts/DashboardContext'
import ImgTitle from '../../assets/images/page/admin/img_title.svg'
import ImgHumanSleep from '../../assets/images/page/admin/img_human_sleep.svg'
import ImgLogo from '../../assets/images/logo/logo.svg'
import IconShowPassword from '../../assets/images/icon/icon_see_password.svg'
import IconHiddenPassword from '../../assets/images/icon/icon_hidden_password.svg'

const Login = () => {
  // router
  const history = useHistory()

  // context
  const {loggedInContext} = useDashboardActionContext()

  // state
  const [userNameValue, setUserNameValue] = useState('adminfysquiz')
  const [passwordValue, setPasswordValue] = useState('adminfysquiz2021')
  const [showPassword, setShowPassword] = useState(false)
  const [userNameError, setUserNameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  // function
  const handleUserNameChange = (e) => {
    setUserNameValue(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value)
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleLoggedIn = () => {
    axios.post(
      'https://www.foryoursweetheart.org/Auth/loginToken',
      {
        username: userNameValue,
        password: passwordValue
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then((response) => {
      setUserNameError(false)
      setPasswordError(false)
      localStorage.setItem('token', response.data.Token)
      loggedInContext(true)
      history.push('/admin/main')
    })
    .catch(() => {
      setUserNameError(true)
      setPasswordError(true)
    })
  }

  // useEffect
  useEffect(() => {
    document.title = 'Login'
    localStorage.removeItem('token')
  }, [])

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
                <div className={`login-input login-input--username${userNameError? ' login-input--error': ''}`}>
                  <input
                    type="text"
                    placeholder="Username"
                    value={ userNameValue }
                    onChange={ handleUserNameChange }
                  />
                </div>
                {
                  userNameError && <div className="login-form__input-error">Username หรือ Password ไม่ถูกต้อง</div>
                }
              </div>
              <div className="login-form__input">
                <div className={`login-input login-input--password${passwordError? ' login-input--error': ''}`}>
                  <input
                    type={showPassword? 'text': 'password'}
                    placeholder="Password"
                    value={ passwordValue }
                    onChange={ handlePasswordChange }
                  />
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
                {
                  passwordError && <div className="login-form__input-error">Username หรือ Password ไม่ถูกต้อง</div>
                }
              </div>
              <div className="login-form__button">
                <button type="button" className="app-button" onClick={handleLoggedIn}>Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
