import { combineReducers } from 'redux';
import sessionReducer from "./session_reducer";
import entitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: ErrorsReducer
})

export default RootReducer;