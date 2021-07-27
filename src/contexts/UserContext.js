import React, {
  useState,
  createContext,
  useContext
} from 'react'

const UserStateContext = createContext()
const UserActionContext = createContext()

export const useUserStateContext = () => {
  return useContext(UserStateContext)
}

export const useUserActionContext = () => {
  return useContext(UserActionContext)
}

const UserProvider = ({ children }) => {
  // state
  // Phrase 1
  const [friendInfoContext, setFriendNameContext] = useState({}) // ชื่อ และ เพศ ของเพื่อน
  const [userInfoContext, setUserInfoContext] = useState({}) // ชื่อ และ เพศ ของคนเล่น

  // Phrase 2

  const [activityOftenContext, setActivityOftenContext] = useState('') // กิจกรรมที่ทำบ่อยกับเพื่อน?
  const [choicesContext, setChoicesContext] = useState([]) // คำถาม quiz และคำตอบที่ตอบ
  const [riskDiabetsContext, setRiskDiabetsContext] = useState('') // ความเสี่ยงในการเป็นโรคเบาหวาน
  const [yearsKnownContext, setYearsKnownContext] = useState('') // จำนวนปีที่รู้จัก?
  const [activityTodayContext, setActivityTodayContext] = useState('') // กิจกรรมล่าสุด ที่ทำกับเพื่อน ก่อนเพื่อนตาย?

  // Phrase 3
  const [causeDiabetesContext, setCauseDiabetesContext] = useState('') // โรคเบาหวาน เกิดจากอะไร
  const [symptomDiabetesContext, setSymptomDiabetesContext] = useState('') // โรคเบาหวาน มีอาการเป็นอย่างไร?

  /* function
  -------------------------------------------------------------- */
  // Phrase 1
  const addFriendInfoContext = ({ name, gender }) => {
    const friendInfo = { name, gender }
    setFriendNameContext(friendInfo)
  }

  const addUserNameContext = (name) => {
    setUserInfoContext({...userInfoContext, ...{ name }})
  }

  const addUserGenderContext = (gender) => {
    setUserInfoContext({...userInfoContext, ...{ gender }})
  }

  // Phrase 2
  const addActivityOftenContext = (activity) => {
    setActivityOftenContext(activity)
    setChoicesContext([])
  }

  const addChoicesContext = (choice) => {
    setChoicesContext([...choicesContext, choice])
  }

  const removeChoicesContext = () => {
    choicesContext.pop()
    setChoicesContext(choicesContext)
  }

  const addRiskDiabetsContext = (score) => {
    if (score >= 4) {
      setRiskDiabetsContext('มีความเสี่ยง')
    } else if (score === 2 || score === 3) {
      setRiskDiabetsContext('มีความเสี่ยงเล็กน้อย')
    } else {
      setRiskDiabetsContext('ไม่มีความเสี่ยง')
    }
  }

  const addYearsKnownContext = (years) => {
    setYearsKnownContext(years)
  }

  const addActivityTodayContext = (activity) => {
    setActivityTodayContext(activity)
  }

  // Phrase 3
  const addCauseDiabetesContext = (cause) => {
    setCauseDiabetesContext(cause)
  }

  const addSymptomDiabetesContext = (symptom) => {
    setSymptomDiabetesContext(symptom)
  }

  const userStateStore = {
    // Phrase 1
    friendInfoContext,
    userInfoContext,

    // Phrase 2
    activityOftenContext,
    choicesContext,
    riskDiabetsContext,
    yearsKnownContext,
    activityTodayContext,

    // Phrase 3
    causeDiabetesContext,
    symptomDiabetesContext,
  }

  const userActionStore = {
    // Phrase 1
    addFriendInfoContext,
    addUserNameContext,
    addUserGenderContext,

    // Phrase 2
    addActivityOftenContext,
    addChoicesContext,
    removeChoicesContext,
    addRiskDiabetsContext,
    addYearsKnownContext,
    addActivityTodayContext,

    // Phrase 3
    addCauseDiabetesContext,
    addSymptomDiabetesContext,
  }

  return (
    <>
      <UserStateContext.Provider value={ userStateStore }>
        <UserActionContext.Provider value={ userActionStore }>
          { children }
        </UserActionContext.Provider>
      </UserStateContext.Provider>
    </>
  )
}

export default UserProvider