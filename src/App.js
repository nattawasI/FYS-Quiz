import React from 'react'
import './style/App.scss'
import UserProvider from './context/UserContext'
import RouteProvider from './context/RouteContext'
import Index from './page/Index'

const App = () => {

  return (
    <UserProvider>
      <>
        <RouteProvider>
          <Index />
        </RouteProvider>
      </>
    </UserProvider>
  );
}

export default App;
