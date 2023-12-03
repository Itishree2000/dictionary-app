import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import historyReducer from './reducers/historyReducer';
import wordReducer from './reducers/wordReducer';

const rootReducer = combineReducers({
  history: historyReducer,
  word: wordReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

