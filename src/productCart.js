import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const displayCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  };

  const minus = () => {
    setQuantity(Math.max(quantity - 1, 1));
  };
  const add = () => {
    setQuantity(quantity + 1);
  };

  // Display cart when the component mounts
  useEffect(() => {
    displayCart();
  }, []);

  const removeFromCart = (itemId) => {
    // Find the index of the item with the given itemId in the cart
    const itemIndex = cart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      // Create a copy of the cart array without the item to be removed
      const updatedCart = [...cart.slice(0, itemIndex), ...cart.slice(itemIndex + 1)];
      setCart(updatedCart);

      // Update localStorage with the modified cart
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <>
      <div>
        <div className='container'>
          <h1>Your Shopping Cart</h1>
          <div className='row'>
            <div className='col-md-6'>
              {/* Map through the cart items and display them */}
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.price}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    <button onClick={minus}>Minus</button>
                    <input type='number' value={quantity} readOnly />
                    <button onClick={add}>Add</button>
                  </li>
                  // Adjust the properties based on your actual item structure
                ))}
              </ul>
            </div>

            <div className='col-md-6'>
              <Link to='/checkout'>Proceed to Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
