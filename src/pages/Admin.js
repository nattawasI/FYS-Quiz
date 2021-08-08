import React, {useEffect} from 'react'
import {
  useHistory,
} from "react-router-dom"
import {useAdminStateContext} from '../contexts/AdminContext'
import Header from '../components/dashboard/Header'
import Bar from '../components/dashboard/Bar'

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
      <div className="app__bar">
        <Bar />
      </div>
      <div className="app__content">
        Content
      </div>
    </div>
  )
}

export default Login
