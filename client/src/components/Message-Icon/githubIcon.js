import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
//import Mailto from "./mailto";
import GithubIcon from '@material-ui/icons/GitHub';

function ghIcon() {

    function handleMessageSubmit(e){
        e.preventDefault();
        // window.location = mailto;
    }

    return (
        <div >
            <IconButton onClick={handleMessageSubmit}>
                <GithubIcon />
            </IconButton>
        </div>
    )
}
export default ghIcon;