import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          Shoe Store
        </Link>

        <ul className="right">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart" className="valign-wrapper">
              My cart
              <i className="material-icons right">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
