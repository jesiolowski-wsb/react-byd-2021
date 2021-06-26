import React, { useState, useEffect } from "react";

const CounterFunc = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log("%c useEffect fired", "color:blue");
  }, [count]);

  return (
    <div className="badge badge-success " onClick={handleIncrement}>
      {count}
    </div>
  );
};

export default CounterFunc;
