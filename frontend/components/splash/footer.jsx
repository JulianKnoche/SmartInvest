import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { falinkedin } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
    <div>
        <h1 className="footer-header">Contact me</h1>
        <div className="footer">
            <div >
                <a href="https://github.com/JulianKnoche/SmartInvest">
                    <img className="linkedinimg" src={window.github}/>
                </a>
            </div>
            <div >
                <a href="https://www.linkedin.com/in/julian-knoche-5893306b/">
                    <img className="linkedinimg" src={window.linkedin}/>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Footer;