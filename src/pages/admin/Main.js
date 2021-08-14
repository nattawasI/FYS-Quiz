import React, {useState, useEffect} from 'react'
import {useDashboardStateContext} from '../../contexts/DashboardContext'
import Header from '../../components/dashboard/Header'
import Bar from '../../components/dashboard/Bar'
import SummaryPage from '../../components/dashboard/SummaryPage'
import TablePage from '../../components/dashboard/TablePage'
import Dialog from '../../components/dashboard/Dialog'
import ConfirmLogout from '../../components/dashboard/ConfirmLogout'

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
        {
          activePageContext === 'SummaryPage' && <SummaryPage />
        }
        {
          activePageContext === 'TablePage' && <TablePage />
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
