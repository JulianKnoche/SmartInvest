import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        // this.allNews
        this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getNews()
        // this.props.getNews().then( () => {
        //     return this.displayNews()
        // })
    }

    handleSubmit() {
        this.props.logout()
    }

    displayNews() {
        // debugger
        if (this.props.news === []){
            return ["a"];
        } else {
        return this.props.news.map( (key,i) => {
           return (
               <li key={`${key}-${i}`}>
                   <a className= "news-feed-titles" href={`${key.url}`}>{ key.title }</a>
                    <p>{key.content}</p>
                </li>
                  )
        })
        }
    }

    render () {
        return (
        <div className="home-page">
            <div className="navBar-home-page">
                <h1>Welcome to your SmartInvest Homepage!</h1>
                <Link to="/" onClick={() => this.handleSubmit()} > Logout</Link>
            </div>
            <br/>
            <div className="news-feed">
                <h2>News Feed</h2>
                <ul>
                    {this.displayNews()}
                </ul>
            </div>
        </div>
        )
    }
}

export default UserProfile;