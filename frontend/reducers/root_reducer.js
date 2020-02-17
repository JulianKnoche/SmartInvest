import { combineReducers } from 'redux';
import sessionReducer from "./session/session_reducer";
import entitiesReducer from './entities/entities_reducer';
import ErrorsReducer from './errors/errors_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: ErrorsReducer
})

export default RootReducer;