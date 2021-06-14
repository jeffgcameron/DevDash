import React, { Component } from 'react';
import { MenuItems } from "./menu-items";
import './navbar.css';

class NavLogout extends Component {
    render() {
        return(
            <div className="nav-container">
            <nav className="my-navbar">
                <ul className="nav-ul">
                    {MenuItems.map((item, index) => {
                        return (
                            <li className="list-items"><a href={item.url}><span class="icon"><i class={item.iconCName}></i></span><span class="title">{item.title}</span></a></li>
                        )
                    })}
                </ul>
                
            </nav>
            
            </div>
        )
    }
}

export default NavLogout