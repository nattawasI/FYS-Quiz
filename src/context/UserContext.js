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
  const [userNameContext, setUserNameContext] = useState('')
  const [yearsKnownContext, setYearsKnownContext] = useState('')
  const [friendInfoContext, setFriendNameContext] = useState({})
  const [activityOftenContext, setActivityOftenContext] = useState('exercise')
  const [choicesContext, setChoicesContext] = useState([
    {
      id: 'exercise-1-1',
      label: 'เกือบทุกวัน',
      score: 0
    },
    {
      id: 'exercise-2-1',
      label: 'ปาร์ตี้ต่อ เพื่อนๆ รออยู่',
      score: 1
    }
  ])
  const [symptomContext, setSymptomContext] = useState('')

  // key store
  // const KEY_STORAGE = 'friendInfo'

  // function
  const addUserNameContext = (name) => {
    setUserNameContext(name)
  }

  const addYearsKnownContext = (years) => {
    setYearsKnownContext(years)
  }

  const addFriendInfoContext = ({ name, gender }) => {
    const friendInfo = { name, gender }
    setFriendNameContext(friendInfo)

    // sessionStorage.setItem(KEY_STORAGE, JSON.stringify(friendInfo))
  }

  const addSymptomContext = (symptom) => {
    setSymptomContext(symptom)
  }

  const addActivityOftenContext = (activity) => {
    setActivityOftenContext(activity)
    setChoicesContext([])
  }

  const addChoicesContext = (choice) => {
    setChoicesContext([...choicesContext, choice])
  }

  const userStateStore = { // use this pass to value
    userNameContext,
    yearsKnownContext,
    friendInfoContext,
    activityOftenContext,
    choicesContext,
    symptomContext,
  }

  const userActionStore = { // use this pass to value
    addUserNameContext,
    addYearsKnownContext,
    addFriendInfoContext,
    addActivityOftenContext,
    addChoicesContext,
    addSymptomContext,
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