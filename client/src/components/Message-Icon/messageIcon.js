import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
//import Mailto from "./mailto";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            marginBottom: 5
        },
    },
}));


function MessageIcon() {

    function handleMessageSubmit(e){
        e.preventDefault();
        // window.location = mailto;
    }
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <IconButton onClick={handleMessageSubmit}>
                <MailOutlineIcon />
            </IconButton>
        </div>
    )
}
export default MessageIcon;