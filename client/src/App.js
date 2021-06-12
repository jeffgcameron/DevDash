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

function App() {
  
  return (
    <>
      <div className="App">
      {/* <Navbar />
      <Logo /> */}
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component ={Chats}/>
            <Route path="/" component={Login}/>
            
            
          </Switch>
        </AuthProvider>
      </Router>
      </div>
    </>
  );
}

export default App;

