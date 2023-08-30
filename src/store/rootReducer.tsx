import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './slices/message';
// Import other reducers as needed

const rootReducer = combineReducers({
  cart: userReducer,
  // Add other reducers here
});

export default rootReducer;
