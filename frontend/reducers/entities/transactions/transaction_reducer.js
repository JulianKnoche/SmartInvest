import { RECEIVE_TRANSACTION, RECEIVE_ALL_TRANSACTIONS } from '../../../actions/transaction_actions';

const transactionReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRANSACTION:
            // return Object.assign([],state,action.transaction)
        case RECEIVE_ALL_TRANSACTIONS:
            // debugger
            return Object.assign([], state, action.transactionData)
        default:
            return state;
    }
}

export default transactionReducer;