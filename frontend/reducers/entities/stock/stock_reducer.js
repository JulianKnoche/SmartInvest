import { RECEIVE_HIST_STOCK_PRICE } from '../../../actions/stock_actions';

const stockReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HIST_STOCK_PRICE:
            const obj = action.stockData.history;
            let priceArr = Object.keys(obj).map( key => {
                return [key, obj[key]["close"]];
            });
            return priceArr;
        default:
            return state;
    }
}

export default stockReducer;
