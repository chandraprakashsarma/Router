import React, { useState, useMemo, useCallback } from 'react';
import ItemList from './ItemListWith';

const ListWith = () => {
  const [items] = useState([
    { id: 1, name: 'Item A' },
    { id: 2, name: 'Item B' },
    { id: 3, name: 'Item C' },
  ]);
  const [filter, setFilter] = useState('');
  const [count, setCount] = useState(0);

  const handleFilterChange = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

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

export default ListWith;
