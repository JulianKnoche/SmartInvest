import * as TransactionAPIUtil from './../util/companies_api_util';

export const RECEIVE_ALL_COMPANIES = "RECEIVE_ALL_COMPANIES";



const receiveAllCompanies = companies => ({
    type: RECEIVE_ALL_COMPANIES,
    companies
})



export const fetchAllCompanies = () => dispatch => {
    return (
        TransactionAPIUtil.fetchAllTickers().then(
            companies => dispatch(receiveAllCompanies(companies))
        )
    )
};