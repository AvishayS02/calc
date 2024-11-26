import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter(counter + 1);
  }
  function sub() {
    setCounter(counter - 1);
  }
  return (
    <div className="counter">
      <h1>{counter}</h1>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
    </div>
  );
}

export default Counter;
