// store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Slice/userSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
