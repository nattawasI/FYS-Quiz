import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import "./style/App.scss"
import RouteProvider from "./contexts/RouteContext"
import UserProvider from "./contexts/UserContext"
import SoundProvider from "./contexts/SoundContext"
import AdminProvider from "./contexts/AdminContext"
import Index from "./pages/Index"
import Login from "./pages/Login"
import Admin from "./pages/Admin"

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
              <AdminProvider>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/admin">
                  <Admin />
                </Route>
              </AdminProvider>
            </Switch>
          </Router>
        </SoundProvider>
      </RouteProvider>
    </UserProvider>
  );
};

export default App;
