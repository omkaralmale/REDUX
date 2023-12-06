const redux = require("redux");

// Reducer function to handle state changes
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "INCREMENTBY2":
      return {
        counter: state.counter + 2,
      };
    case "DECREMENTBY2":
      return {
        counter: state.counter - 2,
      };

    default:
      return state;
  }
};

// Create Redux store and pass the reducer function
const store = redux.createStore(counterReducer);

// Subscriber function to log state changes
const counterSubscriber = () => {
  console.log(store.getState());
};

// Subscribe to store changes
store.subscribe(counterSubscriber);

// Dispatch an action (e.g., INCREMENT) to trigger state change
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENTBY2" });
store.dispatch({ type: "INCREMENTBY2" });
