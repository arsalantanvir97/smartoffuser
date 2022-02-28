import React from "react";
import Header2 from "../components/Header2";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Header2 />
      <section className="signup">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="for-head-h4">Signup As A</h4>
            </div>
          </div>
          <div className="row py-4 offset-3">
            <div className="col-lg-4">
              <div className="card signup-card">
                <Link to="/SignUp2">
                  <div className="card-body text-center">
                    <img src="assets/images/card-usr.png" alt="" />
                    <h4 className="card-title">User</h4>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card signup-card">
                <Link
                  to="#"
                  onClick={() => {
                    window.open(
                      `https://smartoffprint.com/vendor/`,
                      "_blank"
                    );
                  }}
                >
                  <div className="card-body text-center">
                    <svg
                      id="customer-review"
                      xmlns="http://www.w3.org/2000/svg"
                      width="125.489"
                      height="125.611"
                      viewBox="0 0 125.489 125.611"
                    >
                      <path
                        id="Path_57197"
                        data-name="Path 57197"
                        d="M175.708,250.234a15.1,15.1,0,0,0-2.507-.209h-8.025v-5.119a17.186,17.186,0,0,0,7.673-14.307V221.39a17.157,17.157,0,0,0-2.519-8.964l-3.141,1.923a13.477,13.477,0,0,1,1.978,7.041v1.931l-.484-.894a8.412,8.412,0,0,0-7.406-4.414H150.042a8.412,8.412,0,0,0-7.406,4.414l-.483.894V221.39a13.506,13.506,0,0,1,23.029-9.579l2.6-2.612a17.19,17.19,0,0,0-29.31,12.191V230.6a17.186,17.186,0,0,0,7.674,14.307v5.119h-8.025a15.014,15.014,0,0,0-15,15v14.69h3.684v-14.69a11.326,11.326,0,0,1,11.313-11.314h8.167a9.513,9.513,0,0,0,18.749,0H173.2a11.373,11.373,0,0,1,1.9.158Zm-14.216,1.852a5.832,5.832,0,0,1-11.665,0v-5.318a17.19,17.19,0,0,0,11.665,0Zm-5.832-7.981a13.52,13.52,0,0,1-13.5-13.061l3.713-6.865a4.731,4.731,0,0,1,4.165-2.483h11.235a4.731,4.731,0,0,1,4.166,2.483l3.713,6.864a13.521,13.521,0,0,1-13.5,13.062Zm0,0"
                        transform="translate(-92.915 -154.102)"
                        fill="#000"
                      />
                      <path
                        id="Path_57198"
                        data-name="Path 57198"
                        d="M348.82,397.012l-1.6,3.319a11.383,11.383,0,0,1,6.413,10.2v14.69h3.684v-14.69a15.087,15.087,0,0,0-8.5-13.52Zm0,0"
                        transform="translate(-262.037 -299.611)"
                        fill="#000"
                      />
                      <path
                        id="Path_57199"
                        data-name="Path 57199"
                        d="M328.32,475.965H332v8.841H328.32Zm0,0"
                        transform="translate(-247.772 -359.195)"
                        fill="#000"
                      />
                      <path
                        id="Path_57200"
                        data-name="Path 57200"
                        d="M168.164,475.965h3.684v8.841h-3.684Zm0,0"
                        transform="translate(-126.908 -359.195)"
                        fill="#000"
                      />
                      <path
                        id="Path_57201"
                        data-name="Path 57201"
                        d="M77.481,44.218,73.223,35.59l-4.259,8.628L59.442,45.6l6.89,6.717L64.706,61.8l8.517-4.477L81.739,61.8l-1.626-9.484L87,45.6Zm-.634,10.851-3.624-1.906L69.6,55.069l.692-4.037-2.933-2.859,4.053-.588,1.812-3.672,1.812,3.672,4.053.588-2.932,2.859Zm0,0"
                        transform="translate(-44.859 -26.858)"
                        fill="#000"
                      />
                      <path
                        id="Path_57202"
                        data-name="Path 57202"
                        d="M222.621,44.215l-4.259-8.629L214.1,44.215,204.582,45.6l6.89,6.717L209.846,61.8l8.517-4.477L226.88,61.8l-1.627-9.485,6.89-6.716Zm-.633,10.851-3.625-1.906-3.624,1.906.692-4.037L212.5,48.171l4.053-.588,1.812-3.672,1.812,3.672,4.053.588L221.3,51.03Zm0,0"
                        transform="translate(-154.391 -26.855)"
                        fill="#000"
                      />
                      <path
                        id="Path_57203"
                        data-name="Path 57203"
                        d="M353.5,35.586l-4.259,8.629L339.715,45.6l6.89,6.716L344.979,61.8l8.517-4.477,8.518,4.477-1.627-9.485,6.89-6.716-9.522-1.384Zm3.624,19.48L353.5,53.16l-3.625,1.906.693-4.037-2.932-2.859,4.053-.588L353.5,43.91l1.812,3.672,4.053.588-2.932,2.859Zm0,0"
                        transform="translate(-256.371 -26.855)"
                        fill="#000"
                      />
                      <path
                        id="Path_57204"
                        data-name="Path 57204"
                        d="M118.735,0H96.118V3.684h22.618a3.073,3.073,0,0,1,3.07,3.07V38.677a3.073,3.073,0,0,1-3.07,3.071H35.118V54.769L16.67,41.748H6.754a3.073,3.073,0,0,1-3.07-3.071V22.635H0V38.677a6.761,6.761,0,0,0,6.753,6.753H15.5L38.8,61.879V45.431h79.934a6.761,6.761,0,0,0,6.753-6.753V6.753A6.761,6.761,0,0,0,118.735,0Zm0,0"
                        transform="translate(0)"
                        fill="#000"
                      />
                      <path
                        id="Path_57205"
                        data-name="Path 57205"
                        d="M3.684,6.753a3.073,3.073,0,0,1,3.07-3.07H92.434V0H6.753A6.761,6.761,0,0,0,0,6.753v12.2H3.684Zm0,0"
                        transform="translate(0 0)"
                        fill="#000"
                      />
                      <path
                        id="Path_57206"
                        data-name="Path 57206"
                        d="M153.148,428.65h3.684a3.951,3.951,0,0,1,3.946-3.947V421.02a7.639,7.639,0,0,0-7.63,7.63Zm0,0"
                        transform="translate(-115.575 -317.729)"
                        fill="#000"
                      />
                      <path
                        id="Path_57207"
                        data-name="Path 57207"
                        d="M452.143,39.24V30.031h-9.209v3.683h5.525V39.24Zm0,0"
                        transform="translate(-334.267 -22.664)"
                        fill="#000"
                      />
                      <path
                        id="Path_57208"
                        data-name="Path 57208"
                        d="M30.031,116.613v9.21H39.24v-3.684H33.714v-5.526Zm0,0"
                        transform="translate(-22.664 -88.004)"
                        fill="#000"
                      />
                      <path
                        id="Path_57209"
                        data-name="Path 57209"
                        d="M218.215,478.469H221.9v3.683h-3.683Zm0,0"
                        transform="translate(-164.679 -361.084)"
                        fill="#000"
                      />
                      <path
                        id="Path_57210"
                        data-name="Path 57210"
                        d="M248.242,478.469h3.684v3.683h-3.684Zm0,0"
                        transform="translate(-187.34 -361.084)"
                        fill="#000"
                      />
                      <path
                        id="Path_57211"
                        data-name="Path 57211"
                        d="M278.273,478.469h3.683v3.683h-3.683Zm0,0"
                        transform="translate(-210.003 -361.084)"
                        fill="#000"
                      />
                    </svg>
                    <h4 className="card-title">Vendor</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
