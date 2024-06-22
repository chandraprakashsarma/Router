import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button Rendered");
  return <button onClick={onClick}></button>;
});

const CallbackBasic = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
};

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}></button>
  </div>
);

export default CallbackBasic;
