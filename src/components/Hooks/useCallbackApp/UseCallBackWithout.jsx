import React, { useState } from 'react';

const UseCallBackWithout = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);

  // Function to increment the counter
  const increment = () => {
    console.log("Without")
    setCount(prevCount => prevCount + 1);
  };

  // Derived value (length of the items array)
  const itemsLength = items.length;

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>

      <h2>Items (Total: {itemsLength})</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallBackWithout;
