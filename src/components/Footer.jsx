import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="for-footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="social-fotr">
            <div
              className="col-md-12 wow animate__animated animate__fadeInDown animated"
              data-wow-duration="1.3s"
              data-wow-delay="1.3s"
              style={{
                visibility: "visible",
                animationDuration: "1.3s",
                animationDelay: "1.3s"
              }}
            >
              <Link to="#">
                <i className="fab fa-facebook-f mr-2" />
              </Link>
              <Link to="#">
                <i className="fab fa-twitter mr-2" />
              </Link>
              <Link to="#">
                <i className="fab fa-instagram" />
              </Link>
            </div>
            <div className="col-lg-12">
              <span>Copyright 2022 Smart Off. All Right Reserved</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="bottom-footer wow animate__animated animate__zoomIn" data-wow-duration="1.3s" data-wow-delay="1.7s">
      <span>Copyright © 2020 Holler - All Rights Reserved.</span>
  </div> */}
    </section>
  );
};

export default Footer;
