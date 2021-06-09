import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
// import MessageIcon from "./components/Message-Icon/messageIcon"
 import Connect from "./pages/Connect";

//import Navbar from "./components/Navbar/navbar"
//import Logo from "./components/DevDash-Logo/devlogo"
// import Login from "./components/Login/login"
import Register from "./components/Register/register"
//import Signup from "./pages/Signup"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/"]}>
            <Register />
            <Profile />
          </Route>
        </Switch>
        <Switch>
          <Route exact path={["/user"]}>
            <Connect />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;

