import React, {useEffect} from 'react'
import {useDashboardStateContext} from "../../contexts/DashboardContext"
import Header from '../../components/dashboard/Header'
import Bar from '../../components/dashboard/Bar'
import SummaryPage from '../../components/dashboard/SummaryPage'
import TablePage from '../../components/dashboard/TablePage'

const Main = () => {
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
    </div>
  )
}

export default Main
