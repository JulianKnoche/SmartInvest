import { connect } from 'react-redux';
import StockShow from './stock_show';
import { fetchStock } from '../../actions/stock_actions';
import { buyStock } from '../../actions/transaction_actions';
import { getSpecificNews } from '../../actions/news_action';

const mstp = (state, ownProps) => {
    // debugger;
    return {
    stock: state.entities.stock,
    symbol: ownProps.match.params.stockSymbol,
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    news: state.entities.news,
    }
}

const mdtp = dispatch => ({
    fetchStock: symbol => dispatch(fetchStock(symbol)),
    buyStock: symbol => dispatch(buyStock(symbol)),
    getNews: ticker => dispatch(getSpecificNews(ticker)),
})

export default connect(mstp, mdtp)(StockShow);