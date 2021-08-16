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

  // function
  const loggedInContext = () => { // handle login
    setIsLoggedInContext(true)
  }

  const loggedOutContext = () => { // handle logout
    setIsLoggedOutContext(true)
  }

  const filterDateContext = (startDate, endDate) => {
      console.log(startDate)
      console.log(endDate)
      console.log('fetch data of SummaryPage')
  }

  const dashboardStateStore = {
    isLoggedInContext,
    isLoggedOutContext,
  }

  const dashboardActionStore = {
    loggedInContext,
    loggedOutContext,
    filterDateContext,
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