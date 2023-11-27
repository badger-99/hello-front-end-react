import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './redux/slices/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingSlice
  },
});

export default store