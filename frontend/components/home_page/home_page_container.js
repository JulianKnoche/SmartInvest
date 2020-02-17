import UserProfile from './home_page';
import { connect } from 'react-redux';
import { getNews } from '../../actions/news_action';
import { logout } from '../../actions/session_actions';

const mstp = state => {
    // debugger;
    return {
        news: state.entities.news

}}

const mdtp = dispatch => ({
    getNews: () => dispatch(getNews()),
    logout: () => dispatch(logout())
})

export default connect(mstp, mdtp)(UserProfile);