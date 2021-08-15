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
  // const [tableData, setTableData] = useState([]) // data for render in Table

  // function
  const loggedInContext = () => { // handle login
    setIsLoggedInContext(true)
  }

  const loggedOutContext = () => { // handle logout
    setIsLoggedOutContext(true)
  }

  const changeActivePageContext = (name) => { // change active page content between 'SummaryPage' and 'TablePage'
    setActivePageContext(name)
  }

  const changeActiveTabContext = (activity) => { // change active tab table between 'ชวนเล่นเกม', 'ขวนกิน', 'ชวนออกกำลังกาย'
    setActiveTabContext(activity)
  }

  const filterDateContext = (startDate, endDate) => {
    if (activePageContext === 'SummaryPage') { // filter function of SummaryPage
      console.log(startDate)
      console.log(endDate)
      console.log('fetch data of SummaryPage')
    } else { // filter function of TablePage
      console.log(startDate)
      console.log(endDate)
      console.log('fetch data of TablePage')
    }
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