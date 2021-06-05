import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
//import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


function MessageIcon() {

    function handleMessageSubmit(e){
        e.preventDefault()
        //console.log("clicked");
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton onClick={handleMessageSubmit}>
                <ChatIcon />
            </IconButton>
        </div>
    )
}
export default MessageIcon;