import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        // this.allNews
        this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getNews().then( () => {
            return this.displayNews()
        })
    }

    handleSubmit() {
        this.props.logout()
    }

    displayNews() {
        if (this.props.news === {} ){
            return null;
        }
        // debugger
        return Array.from(this.props.news) //.articles.author
    }

    render () {
        return (
        <div className="home-nav-bar">
            <h3>Welcome to your SmartInvest Homepage!</h3>
            {/* <Link to="/">Home</Link> */}
            <Link to="/" onClick={() => this.handleSubmit()} > Logout</Link>
            <br/>
            {this.displayNews()}
        </div>
        )
    }
}

export default UserProfile;