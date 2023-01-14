import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flexxrownavbar">
      <div className="flexxcoliconlogo">
        <Link to="/">
          {" "}
          <i class="bi bi-cart3">#e-Cart</i>{" "}
        </Link>
      </div>
      <div className="flexxrownavright">
        <Link to="/">
          <i class="bi bi-house">Home</i>
        </Link>
        <Link to="/cart">
          {" "}
          <i class="bi bi-cart3">Cart</i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
