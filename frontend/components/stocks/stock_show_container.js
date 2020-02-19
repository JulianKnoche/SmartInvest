import { connect } from 'react-redux';
import StockShow from './stock_show';
import { fetchStock } from '../../actions/stock_actions';
import { buyStock } from '../../actions/transaction_actions';

const mstp = (state, ownProps) => {
    // debugger;
    return {
    stock: state.entities.stock,
    symbol: ownProps.match.params.stockSymbol,
    currentUser: state.session.id
    }
}

const mdtp = dispatch => ({
    fetchStock: symbol => dispatch(fetchStock(symbol)),
    buyStock: symbol => dispatch(buyStock(symbol))
})

export default connect(mstp, mdtp)(StockShow);