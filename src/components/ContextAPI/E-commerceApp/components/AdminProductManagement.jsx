import React, { useState } from 'react';
import { useProducts } from '../contexts/ProductContext';
import { useAuth } from '../contexts/AuthContext';

const AdminProductManagement = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const { user } = useAuth();
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  if (user?.role !== 'admin') {
    return <p>Access Denied</p>;
  }

  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({ name: '', price: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="mr-2 p-2 border border-gray-400 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="mr-2 p-2 border border-gray-400 rounded"
        />
        <button onClick={handleAddProduct} className="bg-green-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Product List</h3>
        {products.map((product) => (
          <div key={product.id} className="mb-2 p-4 bg-white dark:bg-gray-800 rounded shadow">
            <h4 className="text-lg font-bold">{product.name}</h4>
            <p>${product.price}</p>
            <button
              onClick={() => deleteProduct(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              Delete
            </button>
            <button
              onClick={() => updateProduct(product.id, { ...product, price: product.price + 1 })}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Increase Price
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProductManagement;
