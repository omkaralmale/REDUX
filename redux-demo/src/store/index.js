import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuth: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    LogIn(state) {
      console.log("run");
      state.isAuth = true;
    },
    LogOut(state) {
      state.isAuth = false;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;
// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   switch (action.type) {
//     case "INC":
//       return {
//         counter: state.counter + action.payload,
//         showCounter: state.showCounter,
//       };
//     case "DESC":
//       return {
//         counter: state.counter - action.payload,
//         showCounter: state.showCounter,
//       };
//     case "toggle":
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };
