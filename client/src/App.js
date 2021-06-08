import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Logo from "./components/DevDash-Logo/devlogo";
// import Login from "./components/Login/login";
// import Register from "./components/Register/register";
// import Profile from "./pages/Profile";
import Signup from "./pages/Register";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Navbar />
      <Logo />
      <Signup />
      {/* <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
