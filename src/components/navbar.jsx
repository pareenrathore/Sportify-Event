import logo from './logo.png';
import React from 'react';
import './Navbar.css';
import { NavLink,Outlet } from 'react-router-dom';
//import Sportify from './Sportify.png'

const Navbar = () => {
    return (
        <>
        <nav>
            <span id="logo" >
                <img src={logo} alt="Logo" />
            </span>

           <ul>
            <li><NavLink to='/Home'  style={{textDecoration:'none',color: '#ffe4c4'}}>Home</NavLink></li>
            <li><NavLink to='/AboutUs'  style={{textDecoration:'none',color: '#ffe4c4'}}>About Us</NavLink></li>
            <li><NavLink to='/Events'  style={{textDecoration:'none',color: '#ffe4c4'}}>Events</NavLink></li>
            <li><NavLink to='/EventCreation'  style={{textDecoration:'none',color: '#ffe4c4'}}>Create Event</NavLink></li>
           </ul>

            <span class="last"> <button type="button" id="menu">
                <NavLink to='/Login'>Login</NavLink> 
            </button></span>

        </nav>
        <Outlet/>
        </>
    );
};

export default Navbar;