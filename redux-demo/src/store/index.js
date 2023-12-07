import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice/AuthSlice";
import counterReducer from "./CounterSlice/CounterSlice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
