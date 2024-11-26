import { useState } from "react";

function BasicCalc() {
  const [number1, setNumber1] = useState(0);

  return (
    <div>
      <input
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
    </div>
  );
}

export default BasicCalc;
