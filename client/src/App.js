import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/navbar"
import Logo from "./components/DevDash-Logo/devlogo"
import { AuthProvider } from "../src/components/chat-room/contexts/AuthContext";
import Chats from "./components/chat-room/Chats"
import Login from "./components/chat-room/login"
import { STATES } from 'mongoose';
// import Login from "./components/Login/login"
// import Register from "./components/Register/register"
// import Signup from "./pages/Signup"
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
        <AuthProvider>
          <Switch>
            <Route exact path="/chats" component ={Chats}/>
            <Route path="/chats/login" component={Login}/>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}


export default App;

