import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    render () {
        return (
        <div className="home-nav-bar">
            <h3>Welcome to your SmartInvest Homepage!</h3>
            <Link to="/">Home</Link>
            <Link to="/login">Logout</Link>

        </div>
        )
    }
}

export default UserProfile;