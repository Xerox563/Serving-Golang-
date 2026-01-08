import { useState } from "react";

const Counter = () => {
  const [cnt, setCnt] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCnt(cnt + 1)}>Increase</button>
      <button onClick={() => setCnt(cnt - 1)}>Decrease</button>
      <p>Count: {cnt}</p>
    </div>
  );
};

export default Counter;
