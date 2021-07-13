import React from 'react'
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom"
import {AnimatePresence} from 'framer-motion'
import './style/App.scss'
import Start from './pages/Start'
import Preface from './pages/Preface'
import FriendSleep from './pages/FriendSleep'
import CallPolice from './pages/CallPolice'
import PoliceCame from './pages/PoliceCame'
import Siren from './pages/Siren'
import OpenSwitch from './pages/OpenSwitch'


const App = () => {
  const location = useLocation()

  return (
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
          <Route path="/call-police">
            <CallPolice nameFriend="ปิยะบุตร" />
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
  );
}

export default App;
