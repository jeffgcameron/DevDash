import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/navbar"
import Logo from "./components/DevDash-Logo/devlogo"
// import Login from "./components/Login/login"
// import Register from "./components/Register/register"
import Signup from "./pages/Signup"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
    </div>
  );
}

export default App;
