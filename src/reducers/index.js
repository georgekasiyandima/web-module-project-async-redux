import { combineReducers } from 'redux';
import euroReducer from './euroReducer';

const rootReducer = combineReducers({
    euro: euroReducer,
});

export default rootReducer;