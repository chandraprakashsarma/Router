import React from 'react';
import Item from './ItemWithout';

const ItemListWithout = ({ items }) => {
  console.log('ItemList rendered');
  return (
    <ul>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ItemListWithout;
