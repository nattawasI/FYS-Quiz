import React, {useEffect} from 'react'
import {
  Switch,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom"
import {useAdminStateContext} from '../contexts/AdminContext'
import Header from '../components/dashboard/Header'
import Bar from '../components/dashboard/Bar'
import Home from '../components/dashboard/Home'
import TableReport from '../components/dashboard/TableReport'

const Login = () => {
  // router
  const history = useHistory()
  let { path } = useRouteMatch()

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
        <Switch>
          <Route exact path={path}>
            <Home />
          </Route>
          <Route path={`${path}/table`}>
            <TableReport />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Login
