import React from "react";
import Register from "../components/Register/register";
import Navbar from "../components/Navbar/navbar"
import Logo from "../components/DevDash-Logo/devlogo"

function Signup() {
//   const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Logo />
        <Register />
    </div>
  );
}

export default Signup;
