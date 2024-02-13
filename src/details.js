import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";

const ProductDetails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const [product, setProduct] = useState({});
  const { id } = useParams();

  const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDA4MTY2NzgsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NscGNlYnlkeWE4dXIwMXQ4Znl1ajJ3cTIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjFjOTZlZTAyLTM5MWUtNGQ4Mi1iYjAzLTI2ODNlNDg3NmYyMSIsImp0aSI6ImNrZzgzNW9hcHI0ZmkwMXdlOThqbDc4MHQifQ.rqinNICCEBUU9mWlPQWMSHk8nulPEHon4Hu2wmkqVEYzp98AarTZvK0Eec6Hy6FEwGj1dn2GpuItSWopahebMJtzz9-LZ8zxC8eJxMqKEzUTjtenQvwaZFoYGQP3BBQbDDlfuK_-P2ayiJKq1VewE10wf07f1Ou8uwAiKwoH2vYcPdr_iJI7ceMBtwrYTynWHlhXpqvPLWBPnkWU8Q8Grv-Bwna2nskTryw7YWaDzeYaDYMP91CguXcQYwmZ9YSqqd13JzSqNcFxtXVPWtIZtgzSZqG25gRrFUbX4UPv-mOcO9DzUZBAY31GZOV8QK48nVSv47kmJG_qBLLEs4BrFBcB1NKPQ9VZmaP7MuI5VDrY646ISX3McL09fEwpPEhMmrAQqfnBiOs0t-Sk2XlwNlXUq8fIEnVK3jmJfXrBlvSTtphWgRN6ucFbVPtMbQQjZaFFRAfdeElCEYVmlmOr75vSMOGd4q01Zp_2YZWwbIrIbT-rz9IFv0tXqjqglI73If9DneikbAfao4AO0E43KIFBuxOW3hqbF--LWTg4U0jl1N-dvggf5g5jOIssX9SJgFSBfY54ZVnz8ZIHksvu2_JJg6993m4jC7a6gjxOgDqwShJLe1S4PWX8vDMA4Iuqv5Jl6rbLeRPNVLuJut_G8K6ARuQGtc1k0qfF00ndZ70";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clpcebydya8ur01t8fyuj2wq2/master`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              query: `
                query Product($id: ID!) {
                  product(where: { id: $id }) {
                    id
                    name
                    price
                    description
                    color
                    images {
                      id
                      url
                    }
                    size
                  }
                }
              `,
              variables: {
                id,
              },
            }),
          }
        );
        const data = await response.json();
        setProduct(data.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (token) {
      fetchProduct();
    }
  }, [id, token]);

  const addToCart = (productDetails) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productDetails);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Constraint: Check if the product was added successfully
    const isProductAdded = cart.includes(productDetails);

    if (isProductAdded) {
      // Additional actions or constraints
      updateCartTotal(); // Example: Update the total price of the cart
      setConstraintMessage("Product added to cart successfully!");
    } else {
      // Handle the case where the product could not be added to the cart
      setConstraintMessage("Failed to add product to cart. Please try again.");
    }
  };

  const updateCartTotal = () => {
    // Perform actions to update the total price of the cart
    // This could involve iterating through the cart items and summing up prices
    // Example: Calculate the total price and update a state variable
  };

  const [selectedColor, setSelectedColor] = useState(
    product.color ? product.color[0] : null
  );
  const [selectedSize, setSelectedSize] = useState(
    product.size ? product.size[0] : null
  );

  const [constraintMessage, setConstraintMessage] = useState(null);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Slider asNavFor={nav2} ref={slider1}>
              {product.images &&
                product.images.map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={`Product Image ${index + 1}`} />
                  </div>
                ))}
            </Slider>
            <Slider
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {product.images &&
                product.images.map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={`Product Image ${index + 1}`} />
                  </div>
                ))}
            </Slider>
          </div>
          <div className="col-md-4">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: {product.price} MT</p>

            <div className="colorDetails">
              <div className="content-color-container"><b>Color:</b></div>
              {product.color &&
                product.color.map((color, index) => (
                  <div
                    className={`content-color grey-bg ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    key={color}
                    value={color}
                    onClick={() => setSelectedColor(color)}
                    style={{ borderColor: selectedColor === color ? 'grey' : 'lightgrey' }}
                  >
                    <div className={`colordetails ${color}`}></div>
                  </div>
                ))}
            </div>

            <div className="sizeDetails">
              <div className="content-size"><b>Size:</b></div>
              {product.size &&
                product.size.map((size, index) => (
                  <div
                    className={`size grey-bg ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    key={size}
                    value={size}
                    onClick={() => setSelectedSize(size)}
                    style={{ borderColor: selectedSize === size ? 'grey' : 'lightgrey' }}
                  >
                    {size}
                  </div>
                ))}
            </div>

            <button
              className="addToCartButton"
              onClick={() =>
                addToCart({
                  name: product.name,
                  description: product.description,
                  price: product.price,
                  color: selectedColor,
                  size: selectedSize,
                })
              }
            >
              Add to Cart
            </button>

            {/* Constraint Message */}
            {constraintMessage && (
              <div className={`alert ${constraintMessage.includes("successfully") ? "alert-success" : "alert-danger"}`}>
                {constraintMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
