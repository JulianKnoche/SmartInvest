import { RECEIVE_ALL_COMPANIES } from '../../../actions/company_actions';

const companiesReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_COMPANIES:
            return action.companies;
        default:
            return state;
    }
}

export default companiesReducer;