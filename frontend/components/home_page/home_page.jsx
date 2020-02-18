import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getNews()
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
               <li className="li-of-newsfeed" key={`${key}-${i}`}>
                   <div>
                        <img className="pictures-on-news-feed" src={key.urlToImage}></img>
                   </div>
                   <div className="img-text">
                        <div>{key.source.name}</div>
                        <a className= "news-feed-titles" href={`${key.url}`}>{ key.title }</a>
                        <p>{key.description}</p>
                    </div>
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

            {/* <br/>
            <div>
                <PortfolioChart/>
            </div> */}
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