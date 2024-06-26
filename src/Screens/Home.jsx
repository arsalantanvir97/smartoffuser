import React, { useEffect, useState } from "react";
import Header2 from "../components/Header2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import ServicesSlider from "../components/ServicesSlider";
import SubscriptionAuthorization from "../components/SubscriptionAuthorization";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";
import { getPolicyTerms, getServices } from "../helpers/apis";
import { useQuery } from "react-query";
import Loader from "react-spinners/MoonLoader";
import Loaderr from "../components/Loaderr";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #000;
  z-index: 1111111;
`;
const Home = ({ history }) => {
  const [howitworks, sethowitworks] = useState();
  const [question, setquestion] = useState("");
  const [videouri, setvideouri] = useState("");
  const [youtubeid, setyoutubeid] = useState("");
  let [color, setColor] = useState("#000");
  let [loading, setLoading] = useState(true);

  const [becomevendor, setbecomevendor] = useState();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      userInfo?.subscription == null
        ? SubscriptionAuthorization(history)
        : history.replace("/Dashboard");
    }
  }, []);

  const { isLoading: serviceloading, data: services } = useQuery(["services",], () =>
    getServices(),

  );
  const { isLoading: shiploading, data: policydata } = useQuery(["policyterms",], () =>
    getPolicyTerms(),

  );

  useEffect(() => {
    sethowitworks(policydata?.howitworkss);
    setquestion(policydata?.question);
    setbecomevendor(policydata?.becomevendor);
    setvideouri(policydata?.videosection?.videouri);
    setyoutubeid(policydata?.videosection?.videouri?.split("v=")[1]);
  }, [policydata])


  return (
    <>
      <Header2 />
      {shiploading?<Loaderr/>:
      <div>
        <section className="slider-box">
          <div style={{ width: "100%" }}>
            {youtubeid ? (
              <iframe
                width="100%"
                // allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                height="700"
                src={
                  youtubeid &&
                  `https://youtube.com/embed/${youtubeid}?autoplay=1`
                }
                frameborder="0"
                allowfullscreen
              ></iframe>
            ) : (
              <>
                {" "}
                <div
                  style={{
                    height: 700,
                    width: "100%",
                    zIndex: -3333,
                    backgroundColor: "black"
                  }}
                >
                  <MoonLoader
                    color={color}
                    loading={loading}
                    css={override}
                    size={30}
                  />
                </div>
              </>
            )}
          </div>
        </section>
        <section className="it-work mt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="for-head-h4">
                  How It <span className="blue-head"> Works</span>
                </h4>
                <p className="for-head-p">{howitworks?.howitworks}</p>
              </div>
            </div>
            <div className="row py-4 abcccccc">
              <div
                onClick={() => {
                  history?.push("/SignUp");
                }}
                className="col-lg-4"
              >
                <div className="card work-card">
                  <div className="card-body text-center">
                    <img src="assets/images/sign-up.png" alt="" />
                    <h4 className="card-title">Sign Up</h4>
                    <p className="card-text">{howitworks?.signup}</p>
                  </div>
                </div>
              </div>
              <div onClick={() => {
                history?.push("/Login");
              }} className="col-lg-4">
                <div className="card work-card">
                  <div className="card-body text-center">
                    <img src="assets/images/man.png" alt="" />
                    <h4 className="card-title">Sign In</h4>
                    <p className="card-text">{howitworks?.createprofile}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card work-card">
                  <div className="card-body text-center">
                    <img src="assets/images/android ios.png" style={{ maxWidth: 64, maxHeight: 95, minWidth: 64, minHeight: 95 }} alt="" />
                    <h4 style={{ fontSize: 20 }} className="card-title">Available on Android and IOS</h4>
                    <p className="card-text">{howitworks?.launch}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="card-slider" style={{ maxWidth: 700, maxHeight: 500 }}>
          <div className="container-fluid">
            <div className="row align-items-center ml-4">
              <div className="col-lg-10 col-md-12 col-12  justify-content-lg-center align-items-lg-center">
                <div className="card-slider-txt">
                  <h5 style={{ fontSize: 40, marginTop: 5 }}

                  // className="wow animate__animated animate__fadeInDown"
                  // data-wow-duration="1.3s"
                  // data-wow-delay="0.3s"
                  >
                    AVAILABLE <br /> SERVICES
                  </h5>
                  {services?.length > 0 && (
                    <ServicesSlider services={services} />
                  )}
                  <div style={{ height: 30 }}></div>

                  {/* <span
                    className="wow animate__animated animate__fadeInDown"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                  >
                    Lorem Ipsum is simply dummy text of <br /> the printing and
                    typesetting industry. <br /> Lorem Ipsum
                  </span> */}
                  {/* <div
                    id="test"
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                  >
                    <div className="mmprev btn-prev mr-2">
                      <i className="fas fa-caret-left" />
                    </div>
                    <div className="mmnext btn-next ml-2">
                      <i className="fas fa-caret-right" />
                    </div>
                  </div> */}
                  {/* <Link
                    to='#'
                    className="all-services wow animate__animated animate__fadeInUp mb-3"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                  >
                    VIEW ALL SERVICES
                  </Link> */}
                </div>
              </div>
              {/* <div className="col-lg-8 col-md-12 col-12">
                <div className="services owl-carousel owl-theme">
                  <div
                    className="item wow animate__animated animate__zoomIn"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.3s"
                  >
                    <div className="card for-no-bg">
                      <img
                        src="assets/images/new.png"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">ABC Service</h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="item wow animate__animated animate__zoomIn"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.5s"
                  >
                    <div className="card for-no-bg">
                      <img
                        src="assets/images/slider-2.png"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">ABC Service</h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="item wow animate__animated animate__zoomIn"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.7s"
                  >
                    <div className="card for-no-bg">
                      <img
                        src="assets/images/slider-3.png"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">ABC ServiceE</h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="item wow animate__animated animate__zoomIn"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.9s"
                  >
                    <div className="card for-no-bg">
                      <img
                        src="assets/images/new.png"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">ABC Service</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
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
                    <p className="for-head-p">{question?.question}</p>
                    <Link to="/ContactUs" className="blue-btn my-4">
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
                      <img
                        src={
                          becomevendor?.image && becomevendor?.image !== null
                            ? `${imageURL}${userInfo?.userImage}`
                            : "assets/images/red-line.png"
                        }
                        alt=""
                      />
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
                      {becomevendor?.text}
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
      </div>}
    </>
  );
};

export default Home;
