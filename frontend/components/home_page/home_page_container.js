import UserProfile from './home_page';
import { connect } from 'react-redux';
import { getNews } from '../../actions/news_action';
import { logout } from '../../actions/session_actions';
import { fetchTransactionData } from '../../actions/transaction_actions';

const mstp = state => {
    // debugger;
    return {
        news: state.entities.news,
        currentUser: state.entities.users[state.session.id],
        thansactionData: state.entities.transactions
}}

const mdtp = dispatch => ({
    getNews: () => dispatch(getNews()),
    fetchTransactionData: userId => dispatch(fetchTransactionData(userId)),
    logout: () => dispatch(logout()),

})

export default connect(mstp, mdtp)(UserProfile);