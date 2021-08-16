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

  const filterDateContext = (startDate, endDate) => {
    console.log(startDate)
    console.log(endDate)
    console.log('fetch data of SummaryPage')
  }

  const dashboardStateStore = {
    isLoggedInContext,
    isLoggedOutContext,
    summaryData,
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