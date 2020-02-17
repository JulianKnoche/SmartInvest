import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import newsReducer from './news/news_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  news: newsReducer
});

export default entitiesReducer;
