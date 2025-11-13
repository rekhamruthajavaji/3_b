

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";

export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h2>Redux Counter Example</h2>
      <h3>Counter Value: {value}</h3>
      <button onClick={() => dispatch(increment())}>+1</button>{" "}
      <button onClick={() => dispatch(decrement())}>-1</button>{" "}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
