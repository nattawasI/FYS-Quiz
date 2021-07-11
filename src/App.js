import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom"
import './style/App.scss'
import CallPolice from './pages/CallPolice'
import PoliceCame from './pages/PoliceCame'
import Siren from './pages/Siren'


const App = () => {
  return (
    <div className="App">
      <Switch>
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
    </div>
  );
}

export default App;
