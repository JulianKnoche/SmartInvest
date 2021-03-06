import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';

class StockShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shares: 0,
            buyStock: {
                ticker: "", //this.props.symbol,
                units: 0, //this.state.shares,
                price: 0, //currentMarketPrice(),
                user_id: this.props.currentUserId
            }
        };
        this.maxPrice = this.maxPrice.bind(this);
        this.currentMarketPrice = this.currentMarketPrice.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }

    componentDidMount() {
        this.props.fetchStock(this.props.symbol);
        this.props.getNews(this.props.symbol);
    }


    parseStockData() {
        let data = [];
        this.props.stock.forEach( el => {
            data.push({date: el[0], price: el[1]})
        })
        return data.reverse();
    }

    maxPrice () {
        let arr = this.props.stock.map( el => parseFloat((el[1])));
        return Math.max(...arr);
    }

    currentMarketPrice() {
        let arr = this.props.stock.map( el => parseFloat((el[1])));
        return arr[0];
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value})
    }


    handleBuy() {
        let newState = { ticker: this.props.symbol,
            units: parseInt(this.state.shares),
            price: this.currentMarketPrice(),
            user_id: this.props.currentUserId,
            };
        this.setState({ buyStock: newState }, () => this.props.buyStock(this.state.buyStock));
    }

    parseNumber(number) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
          return formatter.format(number);
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

    render () {
        let currentMarketPrice = this.currentMarketPrice()
        return (
        <div className="StockShowPage">
            <div className="StockShowPage-navbar">
                <Link className="homepage-button-in-nav-bar" to="/profile" >Back to Homepage</Link>
            </div>

            <div className="stock-show-body">
                <div className="ChartShowView">
                    <h1>{this.props.symbol}'s stock chart</h1>
                    <LineChart width={900} height={600} data={this.parseStockData()} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <Line dot={false} type="linear" dataKey="price" stroke="#21CE99" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="date" />
                        <YAxis  domain={[0, this.maxPrice() + 10]}/>
                        <Tooltip />
                    </LineChart>
                </div>

                <form className="stock-sidebar-form">
                    <h3 className="form-header">Buy {this.props.symbol}</h3>
                    <div className="form-row">
                        <div>
                            Shares
                        </div>
                        <div>
                        <input
                            type="number"
                            value={this.state.shares}
                            onChange={this.update('shares')}
                            className="form-input"
                        />
                        </div>
                    </div>
                    <div className="form-row">
                        <div>Market Price</div>
                        <div>{this.parseNumber(currentMarketPrice)}</div>
                    </div>

                    <div className="form-row">
                        <div> Estimated Cost </div>
                        <div>{String(this.parseNumber((parseFloat(currentMarketPrice) * parseInt(this.state.shares))))}</div>
                    </div>
                    <div className="button-div">
                    <button className="buyStock-button" onClick={this.handleBuy} >Submit Buy</button>
                    </div>
                    <div className="form-row">
                        <div> My buying power is: </div>
                        <div> {this.parseNumber(this.props.currentUser.buying_power)} </div>
                    </div>
                </form>
            </div>
            <div className="stock-show-news-feed">
            <div className="news-feed">
                <h2 className= "news-feed-title">News Feed</h2>
                <ul>
                    {this.displayNews()}
                </ul>
            </div>
            </div>
        </div>
        )
    }
}

export default StockShow;