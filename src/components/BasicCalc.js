import { useState } from "react"

function BasicCalc() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(0)

  function addNumbers() {
    setResult(number1 + number2)
  }
  function subNumbers() {
    setResult(number1 - number2)
  }
  function mulNumbers() {
    setResult(number1 * number2)
  }
  function divNumbers() {
    setResult(number1 / number2)
  }
  return (
    <div className="counter">
      <input
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
      <input
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
      />
      <div>
        <button onClick={addNumbers}>+</button>
        <button onClick={subNumbers}>-</button>
        <button onClick={mulNumbers}>*</button>
        <button onClick={divNumbers}>/</button>
      </div>
      <h1 style={{ color: result === 0 ? "red" : "blue" }}>Result:{result}</h1>
    </div>
  )
}

export default BasicCalc
