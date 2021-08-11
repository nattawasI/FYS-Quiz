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
  const [activeContentContext, setActiveContentContext] = useState('TableReport') // Summary

  // action
  const loggedInContext = () => {
    setIsLoggedInContext(true)
  }

  // function
  const changeActiveContentContext = (name) => {
    setActiveContentContext(name)
  }

  const dashboardStateStore = {
    isLoggedInContext,
    activeContentContext,
  }

  const dashboardActionStore = {
    loggedInContext,
    changeActiveContentContext,
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