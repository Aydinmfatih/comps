import { useState, useEffect } from "react";
import Button from "../components/button";
import useCounter from "../hooks/use-counter";

function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);
  return (
    <div>
      <h1>Counter is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default CounterPage;
