import React, {useState, useEffect} from 'react'
import Header from '../components/dashboard/Header'

const Login = () => {
  // state

  // function

  // useEffect
  useEffect(() => {
    document.title = 'Dashboard'
  })

  return (
    <div className="app">
      <header className="app__header">
        <Header />
      </header>
      <div className="app__tool">Tools</div>
      <div className="app__tab">Tab</div>
      <div className="app__content">
        <div className="app__content">Table</div>
      </div>
      <div className="app__footer">Footer</div>
    </div>
  )
}

export default Login
