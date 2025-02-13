import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-body-light border-bottom sticky-top"
      style={{ backgroundColor: "white" }}
    >
      <div className="container ">
        <Link
          className="navbar-brand d-flex align-items-center mt-3 mb-3"
          to= {"/"}
        >
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ height: "20px", marginLeft: "-35px" }}
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ms-auto"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%", // Adjust to control spacing
              padding: "0",
            }}
          >
            <li className="nav-item fs-5">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item  fs-5">
              <Link className="nav-link"to= "/about">
                About
              </Link>
            </li>
            <li className="nav-item  fs-5">
              <Link className="nav-link" to= "/products">
                Products
              </Link>
            </li>
            <li className="nav-item  fs-5">
              <Link className="nav-link" to= "/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item  fs-5">
              <Link className="nav-link" to= "/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <span
          className="navbar-toggler-icon fs-5"
          style={{ marginLeft: "40px", marginRight: "-50px" }}
        ></span>
      </div>
    </nav>
  );
}

export default Navbar;
