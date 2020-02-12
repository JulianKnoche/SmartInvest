import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className="navBar">
            <a href="/" >SmartInvest</a>
            <a>Products</a>
            <a>Learn</a>
            <a>Support</a>
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default NavBar;