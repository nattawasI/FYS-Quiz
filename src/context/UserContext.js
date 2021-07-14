import React, { useState, createContext, useContext } from 'react'

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
  const [friendInfoContext, setFriendNameContext] = useState({
    name: '',
    gender: ''
  })

  const [name, setName] = useState('')

  // function
  const addFriendInfoContext = ({name, gender}) => {
    console.log('name: ', name);
    console.log('gender: ', gender);
    addFriendInfoContext({
      name,
      gender
    })
  }

  const addName = (name) => {
    setName(name)
  }

  const userStateStore = { // use this pass to value
    friendInfoContext,
  }

  const userActionStore = { // use this pass to value
    addFriendInfoContext,
    addName,
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