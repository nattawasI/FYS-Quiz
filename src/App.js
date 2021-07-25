import React from 'react'
import './style/App.scss'
import UserProvider from './contexts/UserContext'
import RouteProvider from './contexts/RouteContext'
import Index from './pages/Index'

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
