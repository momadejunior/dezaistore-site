import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDA4MTY2NzgsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NscGNlYnlkeWE4dXIwMXQ4Znl1ajJ3cTIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjFjOTZlZTAyLTM5MWUtNGQ4Mi1iYjAzLTI2ODNlNDg3NmYyMSIsImp0aSI6ImNrZzgzNW9hcHI0ZmkwMXdlOThqbDc4MHQifQ.rqinNICCEBUU9mWlPQWMSHk8nulPEHon4Hu2wmkqVEYzp98AarTZvK0Eec6Hy6FEwGj1dn2GpuItSWopahebMJtzz9-LZ8zxC8eJxMqKEzUTjtenQvwaZFoYGQP3BBQbDDlfuK_-P2ayiJKq1VewE10wf07f1Ou8uwAiKwoH2vYcPdr_iJI7ceMBtwrYTynWHlhXpqvPLWBPnkWU8Q8Grv-Bwna2nskTryw7YWaDzeYaDYMP91CguXcQYwmZ9YSqqd13JzSqNcFxtXVPWtIZtgzSZqG25gRrFUbX4UPv-mOcO9DzUZBAY31GZOV8QK48nVSv47kmJG_qBLLEs4BrFBcB1NKPQ9VZmaP7MuI5VDrY646ISX3McL09fEwpPEhMmrAQqfnBiOs0t-Sk2XlwNlXUq8fIEnVK3jmJfXrBlvSTtphWgRN6ucFbVPtMbQQjZaFFRAfdeElCEYVmlmOr75vSMOGd4q01Zp_2YZWwbIrIbT-rz9IFv0tXqjqglI73If9DneikbAfao4AO0E43KIFBuxOW3hqbF--LWTg4U0jl1N-dvggf5g5jOIssX9SJgFSBfY54ZVnz8ZIHksvu2_JJg6993m4jC7a6gjxOgDqwShJLe1S4PWX8vDMA4Iuqv5Jl6rbLeRPNVLuJut_G8K6ARuQGtc1k0qfF00ndZ70";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [isColorDropdownVisible, setColorDropdownVisible] = useState({});
  const [isSizeDropdownVisible, setSizeDropdownVisible] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clpcebydya8ur01t8fyuj2wq2/master",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              query: `
                query Products {
                  products {
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
            }),
          }
        );

        const data = await response.json();
        setProducts(data.data.products);
        initializeDropdownStates(data.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const initializeDropdownStates = (products) => {
    const colorDropdownStates = {};
    const sizeDropdownStates = {};

    products.forEach((product) => {
      colorDropdownStates[product.id] = false;
      sizeDropdownStates[product.id] = false;
    });

    setColorDropdownVisible(colorDropdownStates);
    setSizeDropdownVisible(sizeDropdownStates);
  };

  const toggleDropdown = (dropdownType, productId) => {
    dropdownType === "color"
      ? setColorDropdownVisible((prevState) => ({
          ...prevState,
          [productId]: !prevState[productId],
        }))
      : setSizeDropdownVisible((prevState) => ({
          ...prevState,
          [productId]: !prevState[productId],
        }));
  };

  const handleSelect = (
    productId,
    selectedValue,
    setSelectedFunction,
    dropdownType
  ) => {
    setSelectedFunction((prevSelection) => ({
      ...prevSelection,
      [productId]: selectedValue,
    }));

    // Close both color and size dropdowns
    setColorDropdownVisible((prevState) => ({
      ...prevState,
      [productId]: false,
    }));
    setSizeDropdownVisible((prevState) => ({
      ...prevState,
      [productId]: false,
    }));
  };

  const addToCart = (productId, productName, productPrice) => {
    const selectedColor = selectedColors[productId];
    const selectedSize = selectedSizes[productId];

    if (selectedColor && selectedSize) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        color: selectedColor,
        size: selectedSize,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(
        `${productName} + ${selectedColor} + ${selectedSize} + ${productPrice} added to cart!`
      );
    } else {
      alert("Please select both color and size before adding to cart.");
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Our Collection</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="img-product">
                <Link to={`/details/${product.id}`}>
                  {" "}
                  <img src={product.images[0].url} alt={product.name} />
                </Link>
              </div>
              <div className="product-name text-center">
                <Link to={`/details/${product.id}`}>{product.name}</Link>
              </div>
              <div className="product-price text-center">
                {product.price} MT
              </div>
              <div className="ps">
                <div className="product-action">
                  <div
                    onClick={() => toggleDropdown("color", product.id)}
                    className="color-col"
                  >
                    <div className="clr">
                      <div
                        className={
                          selectedColors[product.id] || product.color[0]
                        }
                      ></div>
                    </div>
                    {isColorDropdownVisible[product.id] && (
                      <div className="colorSelect">
                        {product.color &&
                          product.color.map((color, index) => (
                            <div
                              className={color + " separate"}
                              key={color}
                              onClick={() => {
                                handleSelect(
                                  product.id,
                                  color,
                                  setSelectedColors,
                                  "color"
                                );

                                // Close the color dropdown if a color is selected
                                setColorDropdownVisible((prevState) => ({
                                  ...prevState,
                                  [product.id]: !prevState[product.id],
                                }));
                              }}
                            >
                              {/* Color content */}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>

                  <div
                    onClick={() => toggleDropdown("size", product.id)}
                    className="size-col"
                  >
                    <div className="size">
                      {selectedSizes[product.id] || "S"}
                    </div>
                    {isSizeDropdownVisible[product.id] && (
                      <div className="sizeSelect">
                        {product.size &&
                          product.size.map((size, index) => (
                            <div
                              key={size}
                              onClick={() => {
                                handleSelect(
                                  product.id,
                                  size,
                                  setSelectedSizes,
                                  "size"
                                );

                                // Close the size dropdown if a size is selected
                                setSizeDropdownVisible((prevState) => ({
                                  ...prevState,
                                  [product.id]: !prevState[product.id],
                                }));
                              }}
                            >
                              {size}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>

                  <div className="whishlist">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>

              <button
                className="addToCartButton"
                onClick={() =>
                  addToCart(product.id, product.name, product.price)
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
