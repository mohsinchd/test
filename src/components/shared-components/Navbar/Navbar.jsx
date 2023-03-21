import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { GiOrange } from "react-icons/gi";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h3>
            <span className="mineTextOrange">
              <GiOrange />
              range
            </span>
            App
          </h3>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <Link to="/sign-in">
                <Button info="Sign In" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up">
                <Button info="Sign Up" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
