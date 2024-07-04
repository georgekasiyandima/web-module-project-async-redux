import { combineReducers } from 'redux';
import euroReducer from './euroReducer';

const rootReducer = combineReducers({
    euroData: euroReducer,
});

export default rootReducer;