import React from 'react';
import Item from './ItemWith';

const ItemListWith = React.memo(({ items }) => {
  console.log('ItemList rendered');
  return (
    <ul>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
});

export default ItemListWith;
