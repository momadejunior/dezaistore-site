import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import Products from "./products";
import ShoppingCart from "./cart";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./footer";
import Details from "./details";
import FaqAccordion from "./faq";
import ShopDisplay from "./shop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCode,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import useCartCount from "./useCartCount";
import PoliticaDeTrocasDevolucoes from "./pages/politicadeDevolucao";
import TermAndCondition from "./pages/terms-and-condition";
import EnviosEEntrega from "./pages/delivery";
import { ContactUs } from "./contact-us";
import Checkout from "./checkout";
import SuccessPage from "./success";

const App = () => {
  const cartCount = useCartCount();

  return (
    <>
      <Router>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <img
                    src="https://media.graphassets.com/LwFMRB5dQJ214DUK73ok"
                    className="logo"
                    alt="logo"
                  />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/shop" className="nav-link">
                        Our Collection
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/faq" className="nav-link">
                        FAQ
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/contact-us" className="nav-link">
                        Contact-us
                      </Link>
                    </li>
                  </ul>
                  <ul className="d-flex">
                    <Link
                      to="/cart"
                      className="btn btn-outline-dark position-relative"
                      type="submit"
                    >
                      <FontAwesomeIcon icon={faCartShopping} />
                      <span className="badge badge-pill badge-danger position-absolute top-0 start-100 translate-middle">
                        {cartCount}
                      </span>
                    </Link>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <Routes>
          {/* Routes here */}
        </Routes>
      </Router>

      <Footer />
    </>
  );
};

export default App;
