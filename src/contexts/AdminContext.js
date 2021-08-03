import React, {useState, createContext, useContext} from 'react'

const AdminStateContext = createContext()
const AdminActionContext = createContext()

export const useAdminStateContext = () => {
  return useContext(AdminStateContext)
}

export const useAdminActionContext = () => {
  return useContext(AdminActionContext)
}

const AdminProvider = ({ children }) => {
  // state
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // action
  const loggedInContext = () => {
    setIsLoggedIn(true)
  }

  const adminStateStore = {
    isLoggedIn,
  }

  const adminActionStore = {
    loggedInContext,
  }

  return (
    <>
      <AdminStateContext.Provider value={ adminStateStore }>
        <AdminActionContext.Provider value={ adminActionStore }>
          { children }
        </AdminActionContext.Provider>
      </AdminStateContext.Provider>
    </>
  )
}

export default AdminProvider