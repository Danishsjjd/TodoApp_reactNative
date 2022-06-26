import {configureStore} from '@reduxjs/toolkit';
import themeSlice from '../store/themeSlice';
import authSlice from '../store/authSlice';
import todoSlice from '../store/todoSlice';

const store = configureStore({
  reducer: {
    themeSlice,
    authSlice,
    todoSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
