import React from "react"
import "./style/App.scss"
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom"
import RouteProvider from "./contexts/RouteContext"
import UserProvider from "./contexts/UserContext"
import SoundProvider from "./contexts/SoundContext"
import DashboardProvider from "./contexts/DashboardContext"
import Index from "./pages/Index"
import Admin from "./pages/admin/Admin"

const App = () => {
  return (
    <UserProvider>
      <RouteProvider>
        <SoundProvider>
          <HashRouter>
            <Switch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/admin/">
                <DashboardProvider>
                  <Admin />
                </DashboardProvider>
              </Route>
            </Switch>
          </HashRouter>
        </SoundProvider>
      </RouteProvider>
    </UserProvider>
  );
};

export default App;
