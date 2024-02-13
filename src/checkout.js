import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Navigate, useNavigate } from 'react-router-dom';

const Checkout = () => {
  // Initialize Email.js with your API key
  emailjs.init("OAXV_TY-Aek8NjEhS");

  // Set your service and template IDs
  const serviceID = "default_service"; // Update this with your actual service ID
  const templateID = "template_d9xe2dl"; // Update this with your actual template ID
  const product = ["BMW", "VOLVO", "TOYOTA"];
  const [savedProducts, setProducts] = useState([]);
  const history = useNavigate();

  // Retrieve "cart" data from local storage on component mount
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(cartData);
  }, []);

  const calculateTotal = () => {
    return savedProducts.reduce((total, product) => total + product.price, 0);
  };

  // State variables for input fields
  const [toName, setToName] = useState("");
  const [fromName, setFromName] = useState("");
  const [message, setMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [townCity, setTownCity] = useState("");
  const [stateCounty, setStateCounty] = useState("");
  const [phone, setPhone] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [productsList, setProductsList] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  // Function to send the email
  const sendEmail = () => {
    // Send email using Email.js
    emailjs
      .send(serviceID, templateID, {
        to_name: toName,
        from_name: fromName,
        message: message,
        last_name: lastName,
        country: country,
        address: address,
        town_city: townCity,
        state_county: stateCounty,
        phone: phone,
        reply_to: replyTo,
        products_list: savedProducts
          .map((product) => product.name, product.price)
          .join(", "),
        total_amount: calculateTotal(),
      })
      .then(function (response) {
        console.log("Email sent successfully:", response);
        localStorage.removeItem('cart');
        setProducts([]);

        // Navigate to the success page
        history('/success');



      })
      .catch(function (error) {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <div className="container cheackout-page">
        <div className="row">
          <div className="col-md-6">
            <div>
              <label>First Name</label>
              <input
                name="from_name"
                id="fromName"
                placeholder="Recipient's Name"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
              />

              <label>Last Name</label>
              <input
                name="last_name"
                id="LastName"
                placeholder="LastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <label>Email</label>
              <input
                name="reply_to"
                id="replyTo"
                placeholder="E-mail"
                value={replyTo}
                onChange={(e) => setReplyTo(e.target.value)}
              />

              <label>Country</label>
              <input
                name="country"
                id="country"
                placeholder="Your Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />

              <label>City</label>
              <input
                name="town_city"
                id="townCity"
                placeholder="Your City"
                value={townCity}
                onChange={(e) => setTownCity(e.target.value)}
              />

              <label>Phone Number</label>
              <input
                name="phone"
                id="phone"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
              />
  


              <label htmlFor="orderNotes">Order Notes</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Notes"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button onClick={sendEmail} className="buy-product">Place order</button>
            </div>
          </div>

          <div className="col-md-4">
            <div id="order-details">
              <h2>Your Order</h2>
              <table>
                <tbody>
                  {savedProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name} ✕1</td>
                      <td>{product.price} MT</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr />
              <p>
                <b>Order Total:</b> {calculateTotal()} MT
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Checkout;


