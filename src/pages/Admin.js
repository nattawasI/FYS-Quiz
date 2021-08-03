import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {useAdminStateContext} from '../contexts/AdminContext'
import Header from '../components/dashboard/Header'
import Toolbar from '../components/dashboard/Toolbar'

const Login = () => {
  // router
  const history = useHistory()

  // context
  const {isLoggedIn} = useAdminStateContext()

  // state

  // function

  // useEffect
  useEffect(() => {
    document.title = 'Admin Dashboard'
  }, [])

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/login')
    }
  }, [history, isLoggedIn])

  return (
    <div className="app">
      <header className="app__header">
        <Header />
      </header>
      <div className="app__toolbar">
        <Toolbar />
      </div>
      <div className="app__tab">Tab</div>
      <div className="app__content">
        <div className="app__content">Table</div>
      </div>
      <div className="app__footer">Footer</div>
    </div>
  )
}

export default Login
