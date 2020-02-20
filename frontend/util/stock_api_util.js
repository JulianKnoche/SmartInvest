export const fetchHistoricalStockPriceData = symbol => {
    const api_key = 'cbLGhbaMwB0VjD2wOVYMBXmLZwAH1wKvzMujsbe3xJDTO8vuPvH7x3JD23z1';
    return $.ajax({
        method: "GET",
        url: `https://api.worldtradingdata.com/api/v1/history?symbol=${symbol}&date_from=2018-01-01&api_token=${api_key}`
    })
};
