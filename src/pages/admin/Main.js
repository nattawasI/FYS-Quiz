import React, {useEffect} from 'react'
import {
  useHistory,
} from 'react-router-dom'
import {useDashboardStateContext} from '../../contexts/DashboardContext'
import Header from '../../components/dashboard/Header'
import Bar from '../../components/dashboard/Bar'
import SummaryPage from '../../components/dashboard/SummaryPage'
import TablePage from '../../components/dashboard/TablePage'
import Dialog from '../../components/dashboard/Dialog'
import ConfirmLogout from '../../components/dashboard/ConfirmLogout'

const Main = () => {
  // router
  // const history = useHistory()

  // context
  const {activePageContext} = useDashboardStateContext()

  // useEffect
  useEffect(() => {
    document.title = 'Admin Dashboard'
  }, [])

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
          activePageContext === 'SummaryPage' && <SummaryPage />
        }
        {
          activePageContext === 'TablePage' && <TablePage />
        }
      </div>
      {/* {
        showConfirm
        && <Dialog>
            <ConfirmLogout />
          </Dialog>
      } */}
    </div>
  )
}

export default Main
