import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Header.css'
import { useLocation } from "react-router-dom";

const Header = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    
    return (
        <>
            {/* <ul>
                <li><NavLink exact activeClassName="active" to='/' >Home</NavLink></li>
                <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
                <li><NavLink activeClassName="active" to='/service/inner'>Service</NavLink></li>
            </ul>  */}
            <ul>
                {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
                <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={splitLocation[1] === "about" ? "active" : ""}>
                    <Link to='/about'>About</Link>
                </li>
                <li className={splitLocation[1] === "service" ? "active" : ""}>
                    <Link to="/service/inner">Service</Link>
                </li>
            </ul>
        </>
    )
}

export default Header
