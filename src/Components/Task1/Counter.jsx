import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => {
      prev + 1;
    });
  };
  return (
    <>
      <h2>Task 1 Make a Counter</h2>
      <button onClick={increment}>{counter}</button>
    </>
  );
};

export default Counter;
