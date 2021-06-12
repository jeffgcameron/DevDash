import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
function BioAndGoals() {
    const classes = useStyles();
    // const [value, setValue] = React.useState('Controlled');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="bio-signup"
                label="Tell us about yourself"
                InputLabelProps={{shrink: true}}
                multiline
                rows={6}
                defaultValue=""
                variant="outlined"
            />
            <TextField
                id="goals-signup"
                label="What are your development goals?"
                InputLabelProps={{shrink: true}}
                multiline
                rows={6}
                defaultValue=""
                variant="outlined"
            />
        </form>

    )
}
export default BioAndGoals;