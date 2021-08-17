import React, {useState, createContext, useContext} from 'react'
import axios from "axios";

const DashboardStateContext = createContext()
const DashboardActionContext = createContext()

export const useDashboardStateContext = () => {
  return useContext(DashboardStateContext)
}

export const useDashboardActionContext = () => {
  return useContext(DashboardActionContext)
}

const DashboardProvider = ({ children }) => {
  // variables
  const API_URL_GET_DATA = 'https://www.foryoursweetheart.org/Api/getData/'
  const API_URL_CREATE_EXCEL = 'https://www.foryoursweetheart.org/Api/createExcel/'

  // context
  const [isLoggedInContext, setIsLoggedInContext] = useState(false)
  const [isLoggedOutContext, setIsLoggedOutContext] = useState(false)
  const [summaryData, setSummaryData] = useState(
    {
      "message": "OK",
      "data": {
        "all_users": 44,
        "female": 26,
        "male": 18,
        "mobile": 35,
        "desktop": 9,
        "food": 22,
        "food_male": 9,
        "food_female": 13,
        "exercise": 10,
        "exercise_male": 4,
        "exercise_female": 6,
        "game": 9,
        "game_male": 4,
        "game_female": 5,
        "cause": {
          "เป็นได้ทั้ง 2 อย่าง": 13,
          "พันธุกรรม": 3,
          "พฤติกรรมการใช้ชีวิตประจำวัน": 6
        },
        "score": {
          "1": 19,
          "2": 16,
          "3": 6
        },
        "share_count": 9
      },
      "start_date": "2021-08-01T00:00:00 07:00",
      "end_date": "2021-08-31T00:00:00 07:00"
    }
  )

  // function
  const loggedInContext = () => { // handle login
    setIsLoggedInContext(true)
  }

  const loggedOutContext = () => { // handle logout
    setIsLoggedOutContext(true)
  }

  const getSummaryDataContext = (startDate, endDate) => {
    // axios.get(`${API_URL_GET_DATA}start_date=${startDate}&end_date=${endDate}`)
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   alert('error',error.response)

    // })
  }

  const dashboardStateStore = {
    isLoggedInContext,
    isLoggedOutContext,
    summaryData,
  }

  const dashboardActionStore = {
    loggedInContext,
    loggedOutContext,
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