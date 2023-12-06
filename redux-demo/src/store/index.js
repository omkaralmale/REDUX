import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return {
        counter: state.counter + 1,
      };
    case "DESC":
      return {
        counter: state.counter - 1,
      };
    case "INC+5":
      return {
        counter: state.counter + 5,
      };
    case "DESC+5":
      return {
        counter: state.counter - 5, // Fix: Decrease by 5
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
