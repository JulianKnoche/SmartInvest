import React from 'react';
import {Link} from 'react-router-dom';

class StockIndex extends React.Component {
    constructor(props) {
        super(props);
        this.fetchingAllStocks = this.fetchingAllStocks.bind(this)
    }

    componentDidMount() {
        this.props.fetchCompanies()
    }

    fetchingAllStocks() {
        return this.props.companies.map( company => {
            return (
            <tr key={company.id}>
                <td><a href={`/#/stock/${company.ticker}`} >{company.company_name}</a></td>
                <td>{company.ticker}</td>
            </tr>
            )
        })
    }

    render () {
        return (
        <div className="stock-index-page">
            <Link className="homepage-button-in-nav-bar" to="/profile" >Back to Homepage</Link>
            <table className="stock-index-table">
                <thead>
                    <tr>
                        <th colSpan="2"> All Companies available for purchase </th>
                    </tr>
                    <tr>
                        <th>Stock Ticker</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.fetchingAllStocks()}
                </tbody>
            </table>
        </div>
        )
    }
}

export default StockIndex;