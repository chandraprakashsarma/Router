import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="flex justify-between items-center mb-2">
                <span>{product.name}</span>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Clear Cart
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
