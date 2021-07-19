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
  const [friendInfoContext, setFriendNameContext] = useState({})
  const [symptomContext, setSymptomContext] = useState('')

  // key store
  // const KEY_STORAGE = 'friendInfo'

  // function
  const addUserNameContext = (name) => {
    setUserNameContext(name)
  }
  const addFriendInfoContext = ({ name, gender }) => {
    const friendInfo = { name, gender }
    setFriendNameContext(friendInfo)

    // sessionStorage.setItem(KEY_STORAGE, JSON.stringify(friendInfo))
  }

  const addSymptomContext = (symptom) => {
    setSymptomContext(symptom)
  }

  // useEffect(() => {
  //   const data = JSON.parse(sessionStorage.getItem(KEY_STORAGE))

  //   if (data) {
  //     setFriendNameContext(data)
  //   }
  // }, [])

  const userStateStore = { // use this pass to value
    userNameContext,
    friendInfoContext,
    symptomContext,
  }

  const userActionStore = { // use this pass to value
    addUserNameContext,
    addFriendInfoContext,
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