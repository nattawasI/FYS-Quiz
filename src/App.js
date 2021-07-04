import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import './style/App.scss'
import Layout1 from './layouts/Layout1'
import Start from './pages/Start'
import Scene1 from './pages/Scene1'


const App = () => {

  return (
    <div className="App">
      <Layout1>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/scene1">
            <Scene1 />
          </Route>
        </Switch>
      </Layout1>
    </div>
  );
}

export default App;
