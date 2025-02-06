import { useState, useEffect } from "react";
import Button from "../components/button";

function useSomething() {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return { count, handleClick };
}
function CounterPage({ initialCount }) {
  return (
    <div>
      <h1>Counter is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}

export default CounterPage;
