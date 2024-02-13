import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [counts, setCounts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(savedProducts);
    console.log(savedProducts)
    // Initialize counts based on the number of products
    setCounts(savedProducts.map(() => 1));
  }, []);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(savedProducts);
    console.log(savedProducts)
    // Initialize counts based on the number of products
    setCounts(savedProducts.map(() => 1));
  }, []);

  const updateTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
      const productPrice = parseFloat(products[i].price);
      if (!isNaN(productPrice)) {
        totalPrice += counts[i] * productPrice;
      }
    }
    return totalPrice.toFixed(2); // Ensure the total price is formatted as a string with two decimal places
  };

  const decrease = (index) => {
    setCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] = Math.max(1, updatedCounts[index] - 1);
      return updatedCounts;
    });
  };

  const add = (index) => {
    setCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] += 1;
      return updatedCounts;
    });
  };

  const remove = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
    setCounts((prevCounts) => [
      ...prevCounts.slice(0, index),
      ...prevCounts.slice(index + 1),
    ]);
  };

  return (
    <>
      <div className="container cart-section">
        <h1>Shopping Cart</h1>
        <div className="row">
          <div className="col-md-9">
            <table className="table-cart">
              <thead>
                <tr className="tdbold">
                  <td>Name</td>
                  <td>Color</td>
                  <td>Size</td>
                  <td>Price</td>
                  <td style={{ textAlign: "center" }}>Quantity</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr className="row-items" key={index}>
                    <td className="products-item">
                      {/* Add Link to the product details page */}
                      <Link to={`/details/${product.id}`}>{product.name}</Link>
                    </td>
                    <td className="products-item">{product.color}</td>
                    <td className="products-item">{product.size}</td>
                    <td className="products-item">{product.price} MT</td>
                    <td className="event-quantity products-item">
                      <button className="button" onClick={() => decrease(index)}>
                        -
                      </button>
                      <div id={`quantity-display-${index}`}>
                        <input className="input" value={counts[index]} readOnly />
                      </div>
                      <button className="button" onClick={() => add(index)}>
                        +
                      </button>
                    </td>
                    <td className="products-item">
                      <button className="remove-button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-3">
            <div className="summary">
              <div>
                <h3>summary</h3>
                <p>Lorem ipsum</p>
              </div>
              <div>
                <strong>Total: </strong><span>{updateTotalPrice()} MT</span>
              </div>
              <div className="checkout">
                <Link to="/checkout">Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
