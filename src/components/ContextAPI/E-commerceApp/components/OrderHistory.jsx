import React from 'react';
import { useOrders } from '../contexts/OrderContext';

const OrderHistory = () => {
  const { orders } = useOrders();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="mb-2 p-4 bg-white dark:bg-gray-800 rounded shadow">
              <h3 className="text-xl font-bold">Order #{order.id}</h3>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
