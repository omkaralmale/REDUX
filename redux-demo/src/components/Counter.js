import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store"; // Adjust the path accordingly

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incCounterHandler = () => {
    dispatch(counterActions.increase(1));
  };

  const decCounterHandler = () => {
    dispatch(counterActions.decrease(1));
  };

  const incBy5Handler = () => {
    dispatch(counterActions.increase(5));
  };

  const decBy5Handler = () => {
    dispatch(counterActions.decrease(5));
  };
  const togglehandler = () => {
    dispatch(counterActions.toggle());
  };

  const mainStyle = {
    backgroundColor: "#6a0dad",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#9c4dcc",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };

  const counterStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "20px",
  };

  return (
    <main style={mainStyle}>
      <button onClick={togglehandler} style={buttonStyle}>
        TOGGLE
      </button>
      <h3 style={counterStyle}>REDUX COUNTER</h3>
      {show && <h1 style={{ color: "#fff" }}>{counter}</h1>}
      <button onClick={incCounterHandler} style={buttonStyle}>
        Increment
      </button>
      <button onClick={decCounterHandler} style={buttonStyle}>
        Decrement
      </button>
      <button onClick={incBy5Handler} style={buttonStyle}>
        Increment by 5
      </button>
      <button onClick={decBy5Handler} style={buttonStyle}>
        Decrement by 5
      </button>
    </main>
  );
};

export default Counter;
