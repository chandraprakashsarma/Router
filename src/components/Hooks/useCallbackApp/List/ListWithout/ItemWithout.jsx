import React from 'react';

const ItemWithout = ({ item }) => {
  console.log(`Item rendered: ${item.name}`);
  return <li>{item.name}</li>;
};

export default ItemWithout;
