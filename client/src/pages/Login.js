import React from "react";
import Login from "../components/Login/login";
import Navbar from "../components/Navbar/navbar"
import Logo from "../components/DevDash-Logo/devlogo"

function LoginPage() {
    //   const classes = useStyles();
      return (
        <div>
            < Navbar />
            <Logo />
            <Login />
        </div>
      );
    }
    
    export default LoginPage;