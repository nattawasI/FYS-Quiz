import React, {useState, useEffect} from 'react'
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom"
import DashboardProvider from "../../contexts/DashboardContext"
import Login from "./Login"
import Main from "./Main"

const Admin = () => {
  // router
  const history = useHistory()

  // state
  const [loggedIn, setLoggedIn] = useState(false)

  const onLoggedIn = () => {
    setLoggedIn(true)
    history.push('/admin/main')
  }

  useEffect(() => {
    if (!loggedIn) {
      history.push('/admin/login')
    }
  }, [history, loggedIn])

  return (
    <DashboardProvider>
      <Switch>
        <Route exact path="/admin/main">
          <Main />
        </Route>
        <Route path="/admin/login">
          <Login onLoggedIn={onLoggedIn} />
        </Route>
      </Switch>
    </DashboardProvider>
  )
}

export default Admin
