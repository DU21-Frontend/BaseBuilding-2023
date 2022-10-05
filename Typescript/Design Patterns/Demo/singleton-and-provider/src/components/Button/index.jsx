import { Button } from "antd";
import React from "react";
import singletonCounter from "../../designPattern/singleton";

const ButtonColor = {
  red: "red",
  blue: "blue",
};

const index = ({ name, setCount }) => {
  const handleButton = () => {
    if (name === ButtonColor.red) {
      singletonCounter.increment();
    }
    if (name === ButtonColor.blue) {
      singletonCounter.decrement();
    }
    setCount(singletonCounter.getCount());
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={handleButton}
        danger={name === ButtonColor.red ? true : false}
      >
        {name && name === ButtonColor.red ? (
          <span>Increase</span>
        ) : (
          <span>Decrease</span>
        )}
      </Button>
    </div>
  );
};

export default index;
