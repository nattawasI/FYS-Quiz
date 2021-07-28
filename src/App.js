import React from 'react'
import './style/App.scss'
// import ViewportExtra from 'viewport-extra'
import RouteProvider from './contexts/RouteContext'
import UserProvider from './contexts/UserContext'
import SoundProvider from './contexts/SoundContext'
import Index from './pages/Index'

const App = () => {
  // new ViewportExtra(375)

  return (
    <UserProvider>
      <RouteProvider>
        <SoundProvider>
          <Index />
        </SoundProvider>
      </RouteProvider>
    </UserProvider>
  );
}

export default App;
