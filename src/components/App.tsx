import { useState } from "react";
import "./App.scss";
export const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Hello there!</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>
        <span>Increment</span>
      </button>
    </div>
  );
};
