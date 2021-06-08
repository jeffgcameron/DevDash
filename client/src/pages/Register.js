import React from "react";
import Login from "../components/Login/login";
import Register from "../components/Register/register";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles((theme) => ({
//   grid: {
//     width: "100%",
//     margin: "0px",
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     background: theme.palette.success.light,
//   },
// }));

function Signup() {
//   const classes = useStyles();
  return (
    <div>
        <Login />
        <Register />
    </div>
  );
}

export default Signup;
