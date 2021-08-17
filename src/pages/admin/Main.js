import React, {useState, useEffect} from 'react'
import {useDashboardStateContext} from '../../contexts/DashboardContext'
import Header from '../../components/dashboard/Header'
import Bar from '../../components/dashboard/Bar'
import Dialog from '../../components/dashboard/Dialog'
import ConfirmLogout from '../../components/dashboard/ConfirmLogout'
import SummaryPage from '../../components/dashboard/SummaryPage'
import Loading from '../../components/dashboard/Loading'

const Main = () => {
  // context
  const {isLoadingContext} = useDashboardStateContext()

  // state
  const [showConfirmLogout, setShowConfirmLogout] = useState(false)

  // function
  const toggleConfirmLogout = () => {
    setShowConfirmLogout(!showConfirmLogout)
  }

  // useEffect
  useEffect(() => {
    document.title = 'Admin Dashboard'
  }, [])

  return (
    <div className="app">
      <header className="app__header">
        <Header openConfirmLogout={toggleConfirmLogout} />
      </header>
      <div className="app__bar">
        <Bar />
      </div>
      <div className="app__content">
        {
          isLoadingContext
          ? <Loading />
          : <SummaryPage />
        }
      </div>
      {
        showConfirmLogout
        && <Dialog onClose={toggleConfirmLogout}>
            <ConfirmLogout closeConfirmLogout={toggleConfirmLogout} />
          </Dialog>
      }
    </div>
  )
}

export default Main
