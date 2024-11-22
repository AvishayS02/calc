import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function clickButton() {
    console.log("click");
    setCounter(counter + 1);
  }
  return (
    <div className="counter">
      <h1>{counter}</h1>
      <button onClick={clickButton}>Click</button>
    </div>
  );
}

export default Counter;
