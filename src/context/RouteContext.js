import React, { useState, createContext, useContext } from 'react'

const RouteStateContext = createContext()
const RouteActionContext = createContext()

export const useRouteStateContext = () => {
  return useContext(RouteStateContext)
}

export const useRouteActionContext = () => {
  return useContext(RouteActionContext)
}

const RouteProvider = ({ children }) => {
  // state
  const [currentPageContext, setCurrentPaontext] = useState('start')


  // function
  const changeCurrentPageContext = (pageTarget) => {
    console.log(pageTarget);
  }


  const routeStateStore = { // use this pass to value
    currentPageContext,
  }

  const routeActionStore = { // use this pass to value
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