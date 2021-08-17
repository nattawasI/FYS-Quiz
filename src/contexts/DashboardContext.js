import React, {useState, createContext, useContext, useEffect} from 'react'
import axios from "axios";
import dayjs from "dayjs";

const DashboardStateContext = createContext()
const DashboardActionContext = createContext()

export const useDashboardStateContext = () => {
  return useContext(DashboardStateContext)
}

export const useDashboardActionContext = () => {
  return useContext(DashboardActionContext)
}

const DashboardProvider = ({ children }) => {
  // state
  const [isLoggedInContext, setIsLoggedInContext] = useState(false)
  const [summaryDataContext, setSummaryDataContext] = useState({})
  const [isLoadingContext, setIsLoadingContext] = useState(true)

  // function
  const loggedInContext = () => { // handle login
    setIsLoggedInContext(true)
  }

  const getSummaryDataContext = (startDate, endDate) => {
    console.log('startDate: ', startDate);
    console.log('endDate: ', endDate);
    const token = localStorage.getItem('token')
    const url_api = `https://www.foryoursweetheart.org/Api/getData?start_date=${startDate}&end_date=${endDate}`
    axios.get(
      url_api,
      {
        headers: {
          Token: token,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then((response) => {
      setTimeout(() => {
        setSummaryDataContext(response.data.data)
      }, 1000);
    })
    .catch((error) => {
      console.log('error', error)
    })
  }

  // useEffect
  useEffect(() => { // get initial data summary
    const today = dayjs();
    const yesterday = today.add(-1, "day")
    const lastWeek = today.add(-7, "day")

    // pass lastWeek and yesterday for requesting API
    getSummaryDataContext(lastWeek.format(), yesterday.format());
  }, []);

  const dashboardStateStore = {
    isLoggedInContext,
    summaryDataContext,
  }

  const dashboardActionStore = {
    loggedInContext,
    getSummaryDataContext,
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