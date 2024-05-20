import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';
import { OrderProvider } from './contexts/OrderContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory';
import AdminProductManagement from './components/AdminProductManagement';
//import './index.css';

const EcommerceApp = () => {
  //const { theme } = useTheme();

  return (
    <ThemeProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <OrderProvider>
              <div className="min-h-screen">
                <Navbar />
                <div className="container mx-auto p-4">
                  <ProductList />
                  <Cart />
                  <OrderHistory />
                  <AdminProductManagement />
                </div>
              </div>
            </OrderProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default EcommerceApp;
