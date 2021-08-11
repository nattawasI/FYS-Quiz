import React, {useEffect} from 'react'
import {
  useHistory,
} from 'react-router-dom'
import {useDashboardStateContext} from '../contexts/DashboardContext'
import Header from '../components/dashboard/Header'
import Bar from '../components/dashboard/Bar'
import Summary from '../components/dashboard/Summary'
import TableReport from '../components/dashboard/TableReport'

const Login = () => {
  // router
  const history = useHistory()

  // context
  const {isLoggedInContext, activeContentContext} = useDashboardStateContext()

  // useEffect
  useEffect(() => {
    document.title = 'Admin Dashboard'
  }, [])

  useEffect(() => {
    if (!isLoggedInContext) {
      history.push('/login')
    }
  }, [history, isLoggedInContext])

  return (
    <div className="app">
      <header className="app__header">
        <Header/>
      </header>
      <div className="app__bar">
        <Bar />
      </div>
      <div className="app__content">
        {
          activeContentContext === 'Summary' && <Summary />
        }
        {
          activeContentContext === 'TableReport' && <TableReport />
        }
      </div>
    </div>
  )
}

export default Login
