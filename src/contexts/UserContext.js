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
  const [userInfoContext, setUserInfoContext] = useState({})
  const [yearsKnownContext, setYearsKnownContext] = useState('')
  const [friendInfoContext, setFriendNameContext] = useState({})
  const [activityOftenContext, setActivityOftenContext] = useState('')
  const [choicesContext, setChoicesContext] = useState([])
  const [activityTodayContext, setActivityTodayContext] = useState('')
  const [symptomContext, setSymptomContext] = useState('')

  // key store
  // const KEY_STORAGE = 'friendInfo'

  // function
  const addFriendInfoContext = ({ name, gender }) => {
    const friendInfo = { name, gender }
    setFriendNameContext(friendInfo)
  }

  const addUserNameContext = (name) => {
    setUserInfoContext({ ...userInfoContext, ...{ name }})
  }

  const addUserGenderContext = (gender) => {
    setUserInfoContext({ ...userInfoContext, ...{ gender }})
  }

  const addYearsKnownContext = (years) => {
    setYearsKnownContext(years)
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

  const removeChoicesContext = () => {
    choicesContext.pop()
    setChoicesContext(choicesContext)
  }

  const addActivityTodayContext = (activity) => {
    setActivityTodayContext(activity)
  }

  const userStateStore = { // use this pass to value
    friendInfoContext,
    userInfoContext,
    yearsKnownContext,
    activityOftenContext,
    choicesContext,
    activityTodayContext,
    symptomContext,
  }

  const userActionStore = { // use this pass to value
    addFriendInfoContext,
    addUserNameContext,
    addUserGenderContext,
    addYearsKnownContext,
    addActivityOftenContext,
    addChoicesContext,
    removeChoicesContext,
    addActivityTodayContext,
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