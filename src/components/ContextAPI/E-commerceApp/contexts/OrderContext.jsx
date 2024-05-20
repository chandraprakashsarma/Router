import React, { createContext, useState, useContext, useEffect } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    // Replace with your API endpoint
    fetch('https://api.example.com/orders')
      .then(response => response.json())
      .then(data => setOrders(data));
  };

  const placeOrder = (order) => {
    setOrders([...orders, order]);
    // POST request to API to place order
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, fetchOrders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);
