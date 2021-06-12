import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
// import MessageIcon from "./components/Message-Icon/messageIcon"
import Connect from "./pages/Connect";
import Signup from "./pages/Register";
import LoginPage from "./pages/Login";
import Info from "./pages/Info"


function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route exact path={["/login"]}>
           <LoginPage />
          </Route>
        </Switch>
        <Switch>
          <Route exact path={["/"]}>
            <Signup />
          </Route>
        </Switch>
        <Switch>
          <Route exact path={["/user"]}>
            <Connect />
          </Route>
        </Switch>
        <Switch>
          <Route exact path={["/profile"]}>
            <Profile />
          </Route>
        </Switch>
        <Switch>
          <Route exact path={["/user/:id"]}>
            <Info />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;

