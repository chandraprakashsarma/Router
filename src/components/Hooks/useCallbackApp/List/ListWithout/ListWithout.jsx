import React, { useState } from 'react';
import ItemList from './ItemListWithout';

const ListWithout = () => {
  const [items] = useState([
    { id: 1, name: 'Item A' },
    { id: 2, name: 'Item B' },
    { id: 3, name: 'Item C' },
  ]);
  const [filter, setFilter] = useState('');
  const [count, setCount] = useState(0);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter items"
      />
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <p>Counter: {count}</p>
      <ItemList items={filteredItems} />
    </div>
  );
};

export default ListWithout;
