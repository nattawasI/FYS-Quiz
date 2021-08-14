import React, {useState, createContext, useContext} from 'react'

const DashboardStateContext = createContext()
const DashboardActionContext = createContext()

export const useDashboardStateContext = () => {
  return useContext(DashboardStateContext)
}

export const useDashboardActionContext = () => {
  return useContext(DashboardActionContext)
}

const DashboardProvider = ({ children }) => {
  // context
  const [isLoggedInContext, setIsLoggedInContext] = useState(false)
  const [isLoggedOutContext, setIsLoggedOutContext] = useState(false)
  const [activePageContext, setActivePageContext] = useState('SummaryPage')
  const [activeTabContext, setActiveTabContext] = useState('game')

  // function
  const loggedInContext = () => {
    setIsLoggedInContext(true)
  }

  const loggedOutContext = () => {
    setIsLoggedOutContext(true)
  }

  const changeActivePageContext = (name) => {
    setActivePageContext(name)
  }

  const changeActiveTabContext = (activity) => {
    setActiveTabContext(activity)
  }

  const dashboardStateStore = {
    isLoggedInContext,
    isLoggedOutContext,
    activePageContext,
    activeTabContext,
  }

  const dashboardActionStore = {
    loggedInContext,
    loggedOutContext,
    changeActivePageContext,
    changeActiveTabContext,
  }

  return (
    <>
      <DashboardStateContext.Provider value={ dashboardStateStore }>
        <DashboardActionContext.Provider value={ dashboardActionStore }>
          { children }
        </DashboardActionContext.Provider>
      </DashboardStateContext.Provider>
    </>
  )
}

export default DashboardProvider