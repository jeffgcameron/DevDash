// import { Menu } from '@material-ui/core';
import React, { Component } from 'react';
import { MenuItems } from "./menu-items";
import './navbar.css';

class Navbar extends Component {
    // state = { clicked: false }

    // handleClick = () => {
    //     this.setState({ clicked: !this.state.clicked })
    // }


    render() {
        return(
            <nav className="my-navbar">
                <ul className="nav-ul" /*className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}*/>
                    {MenuItems.map((item, index) => {
                        return (
                            // <li key={index}>
                            //     <a className={item.cName} href={item.url}>
                            //         {item.icon} {item.title}
                            //     </a>
                            // </li>
                            <li className="list-items"><a href={item.url}><span class="icon"><i class={item.iconCName}></i></span><span class="title">{item.title}</span></a></li>
                        )
                    })}
                    
                </ul>
                {/* <div className="toggle" onclick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    <script>
                function toggleMenu() {
                    let navbar = document.querySelector('.my-navbar');
                    let toggle = document.querySelector('.toggle');
                    navbar.classList.toggle('active');
                    toggle.classList.toggle('active');
                }
                    </script>
                </div> */}
            </nav>
        )
    }
}

export default Navbar