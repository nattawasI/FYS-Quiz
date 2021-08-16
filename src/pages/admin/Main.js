import React, {useState, useEffect} from 'react'
import Header from '../../components/dashboard/Header'
import Bar from '../../components/dashboard/Bar'
import Dialog from '../../components/dashboard/Dialog'
import ConfirmLogout from '../../components/dashboard/ConfirmLogout'
import SummaryPage from '../../components/dashboard/SummaryPage'

const Main = () => {
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
        <SummaryPage />
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
