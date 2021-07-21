import React from 'react'
import './style/App.scss'
import UserProvider from './context/UserContext'
import RouteProvider from './context/RouteContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from './page/Index'
import Admin from './page/Admin'

const App = () => {

  return (
    <UserProvider>
      <div className="App">
        <RouteProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
            </Switch>
          </Router>
        </RouteProvider>
      </div>
    </UserProvider>
  );
}

export default App;
