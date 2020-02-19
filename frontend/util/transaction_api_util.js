export const buyStock = transactionData => {
    return $.ajax({
        method: "POST",
        url: `/api/users/${transactionData.user_id}/transactions`,
        data: { transactionData }
    })
}

export const fetchTransactionData = userId => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/transactions`
    })
}