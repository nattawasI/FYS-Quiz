import React, {useState, useEffect} from 'react'
import {
  useHistory,
} from 'react-router-dom'
import {useAdminStateContext} from '../contexts/AdminContext'
import Header from '../components/dashboard/Header'
import Bar from '../components/dashboard/Bar'
import Summary from '../components/dashboard/Summary'
import TableReport from '../components/dashboard/TableReport'

const Login = () => {
  // router
  const history = useHistory()

  // context
  const {isLoggedIn} = useAdminStateContext()

  // state
  const [activeContent, setActiveContent] = useState('Summary')

  // function
  const changeActiveContent = (name) => {
    setActiveContent(name)
  }

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
        <Header
          activeContent={activeContent}
          changeActiveContent={changeActiveContent}
        />
      </header>
      <div className="app__bar">
        <Bar />
      </div>
      <div className="app__content">
        {
          activeContent === 'Summary' && <Summary />
        }
        {
          activeContent === 'TableReport' && <TableReport />
        }
      </div>
    </div>
  )
}

export default Login
