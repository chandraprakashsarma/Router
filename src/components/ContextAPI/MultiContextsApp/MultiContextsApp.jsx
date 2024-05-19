import React from 'react';
import { AuthProvider } from './AuthContext';
import { ProductProvider } from './ProductContext';
import { CartProvider } from './CartContext';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
//import './index.css';

const MultiContextsApp = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar />
            <div className="container mx-auto p-4">
              <ProductList />
              <Cart />
            </div>
          </div>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default MultiContextsApp;
