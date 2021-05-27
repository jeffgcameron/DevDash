import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function Questions (){
    return (
        <>
        <form className={classes.root} noValidate autoComplete="off">
            <div>
            <TextField required id="standard-required" label="First Name"  />
            <TextField required id="standard-required" label="Last Name"  />
            <TextField required id="standard-required" label="Email"  />
            
            </div>
        </form>

        </>
    )
}
export default Questions;
