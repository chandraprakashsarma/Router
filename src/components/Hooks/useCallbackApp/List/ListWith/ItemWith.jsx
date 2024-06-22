import React from 'react';

const ItemWith = React.memo(({ item }) => {
  console.log(`Item rendered: ${item.name}`);
  return <li>{item.name}</li>;
});

export default ItemWith;
