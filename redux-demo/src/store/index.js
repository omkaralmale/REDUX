import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return {
        counter: state.counter + action.payload,
        payload: action.payload,
      };
    case "DESC":
      return {
        counter: state.counter - action.payload,
        payload: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
