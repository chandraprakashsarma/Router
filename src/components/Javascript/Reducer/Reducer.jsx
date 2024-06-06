import React, {useState} from 'react'

export default function Reducer() {

    const items = [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 15 },
      ];

      const total = items.reduce((sum, item) => sum + item.price, 0);

    //Shopping Cart Total Calculation
      const cartItems = [
        { id: 1, name: 'Apple', quantity: 3, price: 0.5 },
        { id: 2, name: 'Banana', quantity: 2, price: 0.25 },
        { id: 3, name: 'Orange', quantity: 4, price: 0.75 },
      ];
    
      const totalPrice = cartItems.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);

      //Enhanced Shopping Cart
      const [cart, setCart] = useState([
        { id: 1, name: 'Apple', quantity: 3, price: 0.5 },
        { id: 2, name: 'Banana', quantity: 2, price: 0.25 },
        { id: 3, name: 'Orange', quantity: 4, price: 0.75 },
      ]);
    
      const totalCartPrice = cart.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);
    
      const handleIncrement = (id) => {
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
      };
    
      const handleDecrement = (id) => {
        const updatedCart = cart.map((item) =>
          item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCart(updatedCart);
      };



    return (

    <>
    
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
            Reduce Basic Concept
        </h1>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Use Reduce Method and Map Method, List is Array Of Object
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Items List</h1>
            <ul className="mb-4">
            {items.map(item => (
                <li key={item.id} className="flex justify-between border-b py-2">
                <span>{item.name}</span>
                <span>${item.price}</span>
                </li>
            ))}
            </ul>
            <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${total}</span>
            </div>
                
        </div></div>




        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Shopping Cart Total Calculation
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <ul className="mb-4">
                {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between border-b py-2">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>${(item.quantity * item.price).toFixed(2)}</span>
                </li>
                ))}
            </ul>
            <div className="text-right font-bold">
                Total Price: ${totalPrice.toFixed(2)}
            </div>
                
        </div></div>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Template Literals
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <ul className="mb-4">
                {cart.map((item) => (
                <li key={item.id} className="flex justify-between border-b py-2">
                    <span>{item.name}</span>
                    <div className="flex items-center">
                    <button className="bg-gray-300 px-2 rounded" onClick={() => handleDecrement(item.id)}>-</button>
                    <span className="px-2">{item.quantity}</span>
                    <button className="bg-gray-300 px-2 rounded" onClick={() => handleIncrement(item.id)}>+</button>
                    </div>
                    <span>${(item.quantity * item.price).toFixed(2)}</span>
                </li>
                ))}
            </ul>
            <div className="text-right font-bold">
                Total Price: ${totalCartPrice.toFixed(2)}
            </div>
                
        </div></div>

    </>
        
    )
}