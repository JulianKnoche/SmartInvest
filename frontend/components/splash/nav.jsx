import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (

        <div className="navBar">
            <a className="SmartInvest-name-homepage" href="/"> SmartInvest </a>
            <a>Products</a>
            <a>Learn</a>
            <a>Support</a>
            <div className="auth-buttons-homepage">
            <Link className="signin-button-homepage" to="/login"> Sign In </Link>
            {/* <Link className="green-signup-button-homepage" to="/signup"> Sign Up </Link> */}
            <a type="anchor" className="green-signup-button-homepage" href="/#/signup">
                <span className="text-inside-Sign-up-button">Sign Up</span>
            </a>
            </div>
        </div>
    )
}

export default NavBar;