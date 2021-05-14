import React from "react";
import MainButton from "../MainButton";
import "./NavbarStyles.scss";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <a className="logo">Shortly</a>
        </li>
        <li>
          <a className="nav-link">Features</a>
        </li>
        <li>
          <a className="nav-link">Prices</a>
        </li>
        <li>
          <a className="nav-link">Resources</a>
        </li>
        <div className="login-sign-up">
          <ul className="login-sign-up-nav">
            <li>
              <a className="nav-link">Login</a>
            </li>
            <li>
              <MainButton value="Sign Up" />
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
