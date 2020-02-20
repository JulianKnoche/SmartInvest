import { connect } from 'react-redux';
import StockIndex from './stock_index';
import { fetchAllCompanies } from '../../actions/company_actions';

const mstp = state => {
    return {
    companies: state.entities.companies
    }
}

const mdtp = () => dispatch => ({
    fetchCompanies: () => dispatch(fetchAllCompanies())
})

export default connect(mstp, mdtp)(StockIndex);