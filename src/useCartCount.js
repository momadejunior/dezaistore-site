// useCartCount.js
import { useState, useEffect } from 'react';

const CART_UPDATED_EVENT = 'cartUpdated';

const useCartCount = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cart.length);
    };

    // Initial update
    updateCartCount();

    // Listen for custom event
    window.addEventListener(CART_UPDATED_EVENT, updateCartCount);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, updateCartCount);
    };
  }, []);

  return cartCount;
};

export default useCartCount;
