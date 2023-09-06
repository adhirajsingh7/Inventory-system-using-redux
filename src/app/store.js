import { configureStore } from "@reduxjs/toolkit";
import userDataReducers from '../features/userData/userDataSlice'

export const store = configureStore({
  reducer : userDataReducers,
})