import axios from "axios";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ServicesSlider from "../components/ServicesSlider";
import SubscriptionAuthorization from "../components/SubscriptionAuthorization";
import { baseURL } from "../utils/api";

const Home2 = ({ history }) => {
  const [services, setservices] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      userInfo?.subscription==null ? SubscriptionAuthorization(history) : history.replace("/Dashboard");
    } 
    
  }, []);
  // useEffect(() => {
  //   if (userInfo) {
  //     userInfo?.subscription == null
  //       ? SubscriptionAuthorization()
  //       : history.replace("/Home");
  //   }
  // }, [userInfo]);

  const getServices = async () => {
    try {
      const res = await axios.get(`${baseURL}/user/getServices`);
      setservices(res?.data?.services);
      console.log("servicesres", res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getServices();
  }, []);
  return (
    <>
      <div>
        <section className="slider-box">
          <a data-fancybox href="https://www.youtube.com/watch?v=_sI_Ps7JSEk">
            <img
              src="assets/images/video-pic.png"
              className="img-fluid w-100"
              alt=""
            />
          </a>
        </section>
        <section className="it-work">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="for-head-h4">
                  How It <span className="blue-head"> Works</span>
                </h4>
                <p className="for-head-p">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And
                  Typesetting Industry.
                </p>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-lg-4">
                <div className="card work-card">
                  <div className="card-body text-center">
                    <img src="assets/images/sign-up.png" alt="" />
                    <h4 className="card-title">Sign Up</h4>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing &amp;
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card work-card">
                  <div className="card-body text-center">
                    <img src="assets/images/man.png" alt="" />
                    <h4 className="card-title">Create Profile</h4>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing &amp;
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card work-card">
                  <div className="card-body text-center">
                    <img src="assets/images/rocket.png" alt="" />
                    <h4 className="card-title">Launch</h4>
                    <p className="card-text">
                      Lorem Ipsum is simply dummy text of the printing &amp;
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="card-slider">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 col-12 d-flex justify-content-lg-center align-items-lg-center">
                <div className="card-slider-txt">
                  <h5
                    className="wow animate__animated animate__fadeInDown"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.3s"
                  >
                    AVAILABLE <br /> SERVICES
                  </h5>
                  {services?.length>0 &&
                  <ServicesSlider services={services} />}
                </div>
              </div>
           
            </div>
          </div>
        </div>
        <section className="question">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="wwarp">
                  <div className="wwarp-2">
                    <h4 className="for-head-h4">
                      Do You Have{" "}
                      <span className="blue-head"> Any Questions ?</span>
                    </h4>
                    <p className="for-head-p">
                      Lorem Ipsum Is Simply Dummy Text Of The Printing And
                      Typesetting Industry.
                    </p>
                    <Link to="#" className="blue-btn my-4">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-trash py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6  col-12">
                <div
                  className="red1 wow animate__ animate__zoomIn animated"
                  data-wow-duration="1s"
                  data-wow-delay="1.1s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "1.1s",
                    animationName: "zoomIn"
                  }}
                ></div>
                <div
                  className="red2 wow animate__ animate__zoomIn animated"
                  data-wow-duration="1.3s"
                  data-wow-delay="1.6s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1.3s",
                    animationDelay: "1.6s",
                    animationName: "zoomIn"
                  }}
                ></div>
                <div
                  className="ven-box wow animate__ animate__zoomIn animated"
                  data-wow-duration="1.3s"
                  data-wow-delay="2.1s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1.3s",
                    animationDelay: "2.1s",
                    animationName: "zoomIn"
                  }}
                >
                  <img
                    src="assets/images/ven-new.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="warp">
                  <div className="trash-text">
                    <div className="intro-heading">
                      <h4
                        className="for-head-h4 wow animate__ animate__fadeInDown animated"
                        data-wow-duration="1.3s"
                        data-wow-delay="0.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          animationDelay: "0.3s",
                          animationName: "fadeInDown"
                        }}
                      >
                        Become a <span className="blue-head"> Vendor?</span>
                      </h4>
                      <img src="assets/images/red-line.png" alt="" />
                    </div>
                    <p
                      className="wow animate__ animate__fadeInUp animated"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.9s"
                      style={{
                        visibility: "visible",
                        animationDuration: "1.3s",
                        animationDelay: "0.9s",
                        animationName: "fadeInUp"
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. <br /> <br />
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged.
                      <br /> <br />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                    <Link
                      to="#"
                      onClick={() => {
                        window.open(
                          `https://smartoffprint.com/vendor/`,
                          "_blank"
                        );
                      }}
                      className="blue-btn my-4"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home2;
