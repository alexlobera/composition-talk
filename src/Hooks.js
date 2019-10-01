import React, { useState } from "react";

const useLogger = (value, hook) => {
  const [currentValue, setValue] = useState(value);
  console.log(currentValue);
  return [currentValue, setValue];
};

const useSquareValue = value => {
  const [currentValue, setValue] = useLogger(value);

  return [
    currentValue,
    v => {
      setValue(v * v);
    }
  ];
};

const [useLogger, useSquareValue]

const Hooks = () => {
  const [value, setValue] = useSquareValue(0);

  return (
    <>
      <button onClick={() => setValue(value + 1)}> increment </button>
    </>
  );
};

export default Hooks;
