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
  const [activePageContext, setActivePageContext] = useState('TablePage') // SummaryPage

  // action
  const loggedInContext = () => {
    setIsLoggedInContext(true)
  }

  // function
  const changeActivePageContext = (name) => {
    setActivePageContext(name)
  }

  const dashboardStateStore = {
    isLoggedInContext,
    activePageContext,
  }

  const dashboardActionStore = {
    loggedInContext,
    changeActivePageContext,
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