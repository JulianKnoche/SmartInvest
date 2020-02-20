import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import newsReducer from './news/news_reducer';
import stockReducer from './stock/stock_reducer';
import transactionReducer from './transactions/transaction_reducer'
import companiesReducer from './companies/companies_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  news: newsReducer,
  stock: stockReducer,
  transactions: transactionReducer,
  companies: companiesReducer,
});

export default entitiesReducer;
