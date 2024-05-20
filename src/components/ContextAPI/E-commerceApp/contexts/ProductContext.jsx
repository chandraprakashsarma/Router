import React, { createContext, useState, useContext, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    fetch('https://api.example.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addProduct = (product) => {
    setProducts([...products, product]);
    // POST request to API to add product
  };

  const updateProduct = (productId, updatedProduct) => {
    setProducts(products.map(product => product.id === productId ? updatedProduct : product));
    // PUT request to API to update product
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
    // DELETE request to API to delete product
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
