import React, {useState, useEffect, lazy, Suspense} from 'react'
import {useDashboardStateContext} from '../../contexts/DashboardContext'
import Header from '../../components/dashboard/Header'
import Bar from '../../components/dashboard/Bar'
// import SummaryPage from '../../components/dashboard/SummaryPage'
// import TablePage from '../../components/dashboard/TablePage'
import Dialog from '../../components/dashboard/Dialog'
import ConfirmLogout from '../../components/dashboard/ConfirmLogout'

const TablePage = lazy(() => import("../../components/dashboard/TablePage"))
const SummaryPage = lazy(() => import("../../components/dashboard/SummaryPage"))

const Main = () => {
  // context
  const {activePageContext} = useDashboardStateContext()

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
        <Suspense fallback={<div className="app-loading">Loading...</div>}>
          {
            activePageContext === 'SummaryPage' && <SummaryPage />
          }
          {
            activePageContext === 'TablePage' && <TablePage />
          }
        </Suspense>
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
