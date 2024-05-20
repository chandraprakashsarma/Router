import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useOrders } from '../contexts/OrderContext';
import { useAuth } from '../contexts/AuthContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const { user } = useAuth();

  const handleCheckout = () => {
    const order = {
      userId: user.username,
      items: cart,
      date: new Date().toISOString(),
    };
    placeOrder(order);
    clearCart();
  };

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
          <button onClick={handleCheckout} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Checkout
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
