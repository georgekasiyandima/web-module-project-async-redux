import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import euroReducer from './reducers/euroReducer';

const rootReducer = combineReducers({
    euroData: euroReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;