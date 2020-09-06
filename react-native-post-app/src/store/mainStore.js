import { createStore, combineReducers } from 'redux';
import { postReducer } from './reducers/postReducers';


const rootReducer = combineReducers({
  post: postReducer
});

export const store = createStore(rootReducer);