import React, { useState, useCallback, useMemo } from 'react';

const UseCallBackWith = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);

  // useCallback to memoize the increment function
  const increment = useCallback(() => {
        console.log("With")
    setCount(prevCount => prevCount + 1);
  }, []);

  // useMemo to memoize the derived value (length of the items array)
  const itemsLength = useMemo(() => {
    return items.length;
  }, [items]);

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

export default UseCallBackWith;
