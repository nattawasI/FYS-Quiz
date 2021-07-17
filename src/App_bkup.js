import React from 'react'
import {Switch, Route, useLocation} from "react-router-dom"
import {AnimatePresence} from 'framer-motion'
import './style/App.scss'
import UserProvider from './context/UserContext'
import Start from './page/Start'
import Preface from './page/Preface'
import FriendSleep from './page/FriendSleep'
import DarkRoom from './page/DarkRoom'
import WakeFriendUp from './page/WakeFriendUp'
import CallPolice from './page/CallPolice'
import PoliceCame from './page/PoliceCame'
import Siren from './page/Siren'
import OpenSwitch from './page/OpenSwitch'

const App = () => {
  const location = useLocation()

  return (
    <UserProvider>
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/">
              <Start />
            </Route>
            <Route path="/preface">
              <Preface />
            </Route>
            <Route path="/friend-sleep">
              <FriendSleep />
            </Route>
            <Route path="/dark-room">
              <DarkRoom />
            </Route>
            <Route path="/wake-friend-up">
              <WakeFriendUp />
            </Route>
            <Route path="/call-police">
              <CallPolice />
            </Route>
            <Route path="/police-came">
              <PoliceCame />
            </Route>
            <Route path="/siren">
              <Siren />
            </Route>
            <Route path="/open-switch">
              <OpenSwitch />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </UserProvider>
  );
}

export default App;
