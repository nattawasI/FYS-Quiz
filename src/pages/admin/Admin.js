import React, {useEffect} from 'react'
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import {useDashboardStateContext} from '../../contexts/DashboardContext'
import Login from './Login'
import Main from './Main'

const Admin = () => {
  // router
  const history = useHistory()

  // context
  const {isLoggedInContext} = useDashboardStateContext()

  useEffect(() => {
    if (!isLoggedInContext) {
      history.push('/admin/login')
    }
  }, [history, isLoggedInContext])

  return (
    <Switch>
      <Route exact path="/admin/main">
        <Main />
      </Route>
      <Route path="/admin/login">
        <Login />
      </Route>
    </Switch>
  )
}

export default Admin
