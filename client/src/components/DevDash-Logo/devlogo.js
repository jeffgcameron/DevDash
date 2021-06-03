import React, { Component } from 'react';
import DevLogo from './logo.png';
import './devlogo.css';

class Logo extends Component {
    render() {
        return(
            <element>
                <div className="wrapper-header">
                    <div className="header">
                        <img src={DevLogo} alt="DevDash Logo"/>
                    </div>
                </div>

                <div className="container description">
                <p><span style={{color: "#4077CE"}}>Collaborate with like-minded developers</span> <span style={{color:"#9143F0"}}>to ensure your visions become your reality.</span></p>
                </div>
            </element>
        )
    }
}

export default Logo

