import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import './style/App.scss'
import Layout from './layouts/Layout'
import Start from './pages/Start'
import Scene1 from './pages/Scene1'


const App = () => {

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/scene1">
            <Scene1 />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
