import React, { useState, createContext, useContext } from 'react'

const RouteStateContext = createContext()
const RouteActionContext = createContext()

export const useRouteStateContext = () => {
  return useContext(RouteStateContext)
}

export const useRouteActionContext = () => {
  return useContext(RouteActionContext)
}

const RouteProvider = ({children}) => {
  // state
  const [currentPageContext, setCurrentPageContext] = useState('Investigate')

  // function
  const changeCurrentPageContext = (pageTarget) => {
    setCurrentPageContext(pageTarget)
  }


  const routeStateStore = {
    currentPageContext,
  }

  const routeActionStore = {
    changeCurrentPageContext,
  }

  return (
    <>
      <RouteStateContext.Provider value={ routeStateStore }>
        <RouteActionContext.Provider value={ routeActionStore }>
          { children }
        </RouteActionContext.Provider>
      </RouteStateContext.Provider>
    </>
  )
}

export default RouteProvider