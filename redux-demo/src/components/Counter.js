import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incCounterHandler = () => {
    dispatch({ type: "INC" });
  };

  const decCounterHandler = () => {
    dispatch({ type: "DESC" });
  };

  const incBy5Handler = () => {
    dispatch({ type: "INC+5" });
  };

  const decBy5Handler = () => {
    dispatch({ type: "DESC+5" });
  };

  return (
    <main>
      <h1>REDUX COUNTER</h1>
      <div>-------{counter}-------</div>
      <button onClick={incCounterHandler}>Increment</button>
      <button onClick={decCounterHandler}>Decrement</button>
      <button onClick={incBy5Handler}>Increment by 5</button>
      <button onClick={decBy5Handler}>Decrement by 5</button>
    </main>
  );
};

export default Counter;
