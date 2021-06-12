import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Questions() {
    const classes = useStyles();
    // const [value, setValue] = React.useState('Controlled');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };
    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField required id="lastname-signup" label="First Name" InputLabelProps={{shrink: true}}/>
                    <TextField required id="firstname-signup" label="Last Name" InputLabelProps={{shrink: true}} />
                    <TextField required id="email-signup" label="Email" InputLabelProps={{shrink: true}}/>
                    <TextField required id="password-signup" label="Password" type="password" InputLabelProps={{shrink: true}}/>
                </div>
            </form>

        </>
    )
}

export default Questions;

