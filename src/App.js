import React from 'react'
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom"
import {AnimatePresence} from 'framer-motion'
import './style/App.scss'
import Preface from './pages/Preface'
import CallPolice from './pages/CallPolice'
import PoliceCame from './pages/PoliceCame'
import Siren from './pages/Siren'


const App = () => {
  const location = useLocation()

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/preface" location={location} key={location.key}>
            <Preface />
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
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
