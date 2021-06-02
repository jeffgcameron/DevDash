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
                    <TextField required id="standard-required" label="First Name" />
                    <TextField required id="standard-required" label="Last Name" />
                    <TextField required id="standard-required" label="Email" />
                </div>
            </form>

        </>
    )
}

export default Questions;

