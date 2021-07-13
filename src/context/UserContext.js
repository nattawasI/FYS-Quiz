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
  const [friendNameContext, setFriendNameContext] = useState('')
  const [friendGenderContext, setFriendGenderContext] = useState('')

  // function
  const addFriendNameContext = (friendName) => {
    setFriendNameContext(friendName)
  }

  const addFriendGenderContext = (friendGender) => {
    setFriendGenderContext(friendGender)
  }

  const userStateStore = { // use this pass to value
    friendNameContext,
    friendGenderContext,
  }

  const userActionStore = { // use this pass to value
    addFriendNameContext,
    addFriendGenderContext,
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