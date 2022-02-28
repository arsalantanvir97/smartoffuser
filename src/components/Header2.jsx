import React from "react";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <section className="for-header">
      <div className="container">
        <nav className="navbar navbar-expand-xl navbar-light">
          <Link to="/" className="navbar-brand">
            <img src="assets/images/logo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse align-items-center"
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="fas fa-phone blue-head" /> +012 345 6789
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location = "mailto:Info@smartoffprint.com";
                    e.preventDefault();
                  }}
                  className="nav-link"
                >
                  <i className="fas fa-envelope blue-head mr-1" />
                  Info@smartoffprint.com
                </Link>
              </li>
            </ul>
            <Link to="/SignUp" className="head-btn">
              Register
            </Link>
            <Link to="/Login" className="head-btn-2">
              Login
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header2;
