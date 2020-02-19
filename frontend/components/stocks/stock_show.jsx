import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class StockShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shares: 0,
            buyStock: {
                ticker: "", //this.props.symbol,
                units: 0, //this.state.shares,
                price: 0, //currentMarketPrice(),
                user_id: this.props.currentUser
            }
        };
        this.maxPrice = this.maxPrice.bind(this);
        this.currentMarketPrice = this.currentMarketPrice.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }

    componentDidMount() {
        this.props.fetchStock(this.props.symbol)
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
            user_id: this.props.currentUser,
            };
        this.setState({ buyStock: newState }, () => this.props.buyStock(this.state.buyStock));
    }

    render () {
        let currentMarketPrice = this.currentMarketPrice()
        return (
        <div className="StockShowPage">
            <div className="ChartShowView">
                <h1>{this.props.symbol}'s stock chart</h1>
                <LineChart width={900} height={600} data={this.parseStockData()}>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis  domain={[0, this.maxPrice() + 10]}/>
                </LineChart>
            </div>

            <form className="stock-sidebar-form">
                <h3>Buy {this.props.symbol}</h3>
                <label>Shares
                <input
                    type="number"
                    value={this.state.shares}
                    onChange={this.update('shares')}

                />
                </label>
                <div>
                    <span>Market Price</span>
                    <span>{currentMarketPrice}</span>
                </div>

                <div>
                    <span> Estimated Cost </span>
                    <span>{String(parseFloat(currentMarketPrice) * parseInt(this.state.shares))}</span>
                </div>

                <button className="buyStock-button" onClick={this.handleBuy} >Submit Buy</button>
            </form>

        </div>
        )
    }
}

export default StockShow;