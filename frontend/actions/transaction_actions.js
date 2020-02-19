import * as TransactionAPIUtil from './../util/transaction_api_util';

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_ALL_TRANSACTIONS = "RECEIVE_ALL_TRANSACTIONS";

const receiveTransaction = transaction => ({
    type: RECEIVE_TRANSACTION,
    transaction
})

const receiveAllTransactions = transactionData => ({
    type: RECEIVE_ALL_TRANSACTIONS,
    transactionData
})


export const buyStock = transactionData => dispatch => {
    // debugger
    return (
        TransactionAPIUtil.buyStock(transactionData).then(
            transactionData => dispatch(receiveTransaction(transactionData))
        )
    )
};

export const fetchTransactionData = userId => dispatch => {
    return (
        TransactionAPIUtil.fetchTransactionData(userId).then(
            transactionData => dispatch(receiveAllTransactions(transactionData))
        )
    )
};