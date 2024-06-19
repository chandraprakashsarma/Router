import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';

const indexstore = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
});

export default indexstore;
