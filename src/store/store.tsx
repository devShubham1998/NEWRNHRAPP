import {configureStore} from '@reduxjs/toolkit';
import callApi from './rootReducer';

export const store = configureStore({
  reducer: {
    message: callApi,
  },
});
