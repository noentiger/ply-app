import { combineReducers } from 'redux';
import { offersReducer } from './offers';

const rootReducer = combineReducers({
  offers: offersReducer,
});

export default rootReducer;
