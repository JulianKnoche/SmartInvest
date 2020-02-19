import * as NewsAPIUtil from './../util/stock_api_util';

export const RECEIVE_HIST_STOCK_PRICE = "RECEIVE_HIST_STOCK_PRICE ";

const receiveStock = stockData => ({
    type: RECEIVE_HIST_STOCK_PRICE,
    stockData
})

export const fetchStock = symbol => dispatch => {
    return (
        NewsAPIUtil.fetchHistoricalStockPriceData(symbol).then(
            stockData => dispatch(receiveStock(stockData))
        )
    )
};