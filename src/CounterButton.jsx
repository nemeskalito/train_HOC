import React, { memo } from "react";

import "./App.css";

const CounterButton = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={setCount}>+++</button>
      <p>{count}</p>
    </div>
  );
};

export default memo(CounterButton);
