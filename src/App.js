import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./style/App.scss";
import RouteProvider from "./contexts/RouteContext";
import UserProvider from "./contexts/UserContext";
import SoundProvider from "./contexts/SoundContext";
import Index from "./pages/Index";
import Login from "./pages/Login";

const App = () => {
  return (
    <UserProvider>
      <RouteProvider>
        <SoundProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/admin">
                <Login />
              </Route>
            </Switch>
          </Router>
        </SoundProvider>
      </RouteProvider>
    </UserProvider>
  );
};

export default App;
