import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import todoReducer from '../slices/todoSlice'

// middleware. just for fun
const updater = (store) => (next) => (action) => {
  if (action.type === 'todo/updateTodo/fulfilled') {
    action.payload.title = `${action.payload.title}1`;
  }
  return next(action);
};

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, updater),
});