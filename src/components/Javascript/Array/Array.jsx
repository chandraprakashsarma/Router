import React, { useState } from 'react';



export default function Array() {

  //Adding, Removing, and Updating items to an Array
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editedItem, setEditedItem] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const editItem = (index) => {
    setEditedItem(items[index]);
    setEditMode(true);
    setEditIndex(index);
  };

  const updateItem = () => {
    if (editedItem.trim() !== '') {
      const updatedItems = [...items];
      updatedItems[editIndex] = editedItem.trim();
      setItems(updatedItems);
      setEditMode(false);
      setEditedItem('');
      setEditIndex(null);
    }
  };

  //ProductList 
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '' });

  const addProduct = () => {
    if (newProduct.name.trim() !== '' && newProduct.price.trim() !== '' && newProduct.quantity.trim() !== '') {
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      setNewProduct({ name: '', price: '', quantity: '' });
    }
  };

  const removeProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  //List of books
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');

   // Function to add a new book
   const addBook = () => {
    if (title && author) {
      const newBook = {
        id: Date.now(),
        title,
        author,
      };
      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
    }
  };

  // Function to remove a book by id
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Function to start editing a book
  const startEditing = (book) => {
    setEditId(book.id);
    setEditTitle(book.title);
    setEditAuthor(book.author);
  };

  // Function to update a book's information
  const updateBook = () => {
    setBooks(books.map(book =>
      book.id === editId
        ? { ...book, title: editTitle, author: editAuthor }
        : book
    ));
    setEditId(null);
    setEditTitle('');
    setEditAuthor('');
  };


  
  
  






    return (

        <>
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Array Basic Concept
        </h1>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Adding, Removing, and Updating items to an Array
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/3 bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Manage Items</h2>
        <div className="flex mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item"
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 w-full"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded"
        >
          Add
        </button>
        </div>

        <ul>
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 rounded-md px-4 py-2 mt-2">
            {editMode && editIndex === index ? (
              <input
                type="text"
                value={editedItem}
                onChange={(e) => setEditedItem(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mr-2"
              />
            ) : (
              <span>{item}</span>
            )}
            <div>
              <button
                onClick={() => editItem(index)}
                className="text-blue-500 hover:text-blue-600 font-bold mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-600 font-bold"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
        </ul>

        {editMode && (
        <button
          onClick={updateItem}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded mt-4"
        >
          Update
        </button>
         )}
        </div>
        </div>





        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            List of products, and users can add new products to the list.
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          placeholder="Product Name"
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 w-1/3"
        />
        <input
          type="text"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          placeholder="Price"
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 w-1/3"
        />
        <input
          type="text"
          value={newProduct.quantity}
          onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
          placeholder="Quantity"
          className="border border-gray-300 rounded-md px-4 py-2 w-1/3"
        />
        <button
          onClick={addProduct}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded ml-2"
        >
          Add Product
        </button>
      </div>

      <ul>
        {products.map((product, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 rounded-md px-4 py-2 mt-2">
            <div>
              <p>{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <button
              onClick={() => removeProduct(index)}
              className="text-red-500 hover:text-red-600 font-bold"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

        </div>
        </div>


        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Array of Objects
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Book List</h2>

      {/* Add new book form */}
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2"
          onClick={addBook}
        >
          Add Book
        </button>
      </div>

      {/* Edit book form */}
      {editId && (
        <div className="mb-4">
          <input
            type="text"
            className="border p-2 mr-2"
            placeholder="Edit Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <input
            type="text"
            className="border p-2 mr-2"
            placeholder="Edit Author"
            value={editAuthor}
            onChange={(e) => setEditAuthor(e.target.value)}
          />
          <button className="bg-green-500 text-white p-2" onClick={updateBook}>
            Save
          </button>
        </div>
      )}

      {/* Display book list */}
      <ul>
        {books.map(book => (
          <li key={book.id} className="border p-2 mb-2 flex justify-between">
            <span>{book.title} - {book.author}</span>
            <div>
              <button
                className="bg-yellow-500 text-white p-2 mr-2"
                onClick={() => startEditing(book)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white p-2"
                onClick={() => removeBook(book.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
        </div>
        </div>
        
      






        </>
        
    )
}