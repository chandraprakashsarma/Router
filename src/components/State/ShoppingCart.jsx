import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', quantity: 1 },
    { id: 2, name: 'Product 2', quantity: 1 },
  ]);

  const adjustQuantity = (id, amount) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity + amount } 
          : item
      )
    );
  };

  return (
    <>
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Shopping Cart with Quantity Adjustment 
   </h1>
    <div className="p-4">
      <ul>
        {cart.map(item => (
          <li key={item.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
            <span>{item.name}</span>
            <div className="flex items-center space-x-2">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => adjustQuantity(item.id, -1)}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="bg-green-500 text-white px-2 py-1 rounded"
                onClick={() => adjustQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default ShoppingCart;
