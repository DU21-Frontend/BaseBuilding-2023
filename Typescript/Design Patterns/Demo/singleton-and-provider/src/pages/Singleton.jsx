import React, { useState } from "react";
import singletonCounter from "../designPattern/singleton";
import Button from "../components/Button";

const Singleton = () => {
  const [count, setCount] = useState(singletonCounter.getCount());

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "space-evenly",
        }}
      >
        <Button name="red" setCount={setCount} />
        <Button name="blue" setCount={setCount} />
      </div>
      <span style={{ marginTop: '20px', fontSize: '20px' }}>Count: {count}</span>
    </div>
  );
};

export default Singleton;
