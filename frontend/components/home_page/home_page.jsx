import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioChart from './portfolio_chart';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getNews();
        this.props.fetchTransactionData(this.props.currentUser.id);

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
                        <a className= "news-feed-titles" href={`${ key.url }`}>{ key.title }</a>
                        <p>{key.description}</p>
                    </div>
                </li>
                  )
        })
        }
    }

    parseListOfTransactions() {
        // debugger
        let list = Object.values(this.props.transactionData);
        return list.map( transaction => {
            return (
            <tr key={transaction.id}>
                <td>{transaction.ticker}</td>
                <td>{transaction.units}</td>
                <td>{transaction.price}</td>
            </tr>
                )
        })
    }


    render () {
        return (
        <div className="home-page">
            <div className="navBar-home-page">
                <h1>Welcome, {this.props.currentUser.first_name} to your SmartInvest Homepage!</h1>
                <Link className="homepage-button-in-nav-bar" to="/stocks"> Available Stocks for purchase</Link>
                <Link className="homepage-button-in-nav-bar" to="/" onClick={() => this.handleSubmit()} > Logout</Link>
            </div>

            <br/>
            <div>
                <h3>My portfolio</h3>
                <div className="homepage-body">
                    <PortfolioChart/>
                    <div className="side-stock-info-on-homepage">
                        <div className="buying-power"> My buying power is: {this.props.currentUser.buying_power}</div>
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan="3"> History of my transactions </th>
                                </tr>
                                <tr>
                                    <th>Stock Ticker</th>
                                    <th>Count</th>
                                    <th>Unit Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.parseListOfTransactions()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br/>

            <div className="news-feed">
                <h2 className= "news-feed-title">News Feed</h2>
                <ul>
                    {this.displayNews()}
                </ul>
            </div>

        </div>
        )
    }
}

export default UserProfile;