import React from "react";
// import { Link } from 'react-router-dom'
import{ logo } from "../../assets/index";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  localStorage.setItem("posatdata", JSON);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-0">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#add8e669" }}
        >
          <a className="navbar-brand" href="/">
            <img src={logo} alt="img not found" />
          </a>
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
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/signup">
                  Sign Up{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/login">
                  Log In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;