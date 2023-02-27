import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header2 from "../components/Header2";
import Toasty from "../utils/toast";

import { userSignUpAction } from "../actions/userActions";
import { validateEmail } from "../utils/ValidateEMail";
import api, { baseURL } from "../utils/api";
import axios from "axios";
import InputNumber from "../components/InputNumber";
import Swal from "sweetalert2";
import { closeModals } from "../utils/closeModals";

const SignUp2 = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.replace("/Dashboard");
    }
  }, [userInfo]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);
  const [loading, setloading] = useState(false);
  const [privacypolicy, setprivacypolicy] = useState("");
  const [code, setcode] = useState("");

  const [termscondition, settermscondition] = useState("");

  const dispatch = useDispatch();

  const verifyEmailHandler = async () => {
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      const body = { email };
      setloading(true);

      console.log("TEST");
      try {
        const res = await api.post("/auth/userVerifyEmail", body);
        setloading(false);

        console.log("res", res);

        Swal.fire({
          icon: "success",
          title: "SUCCESS",
          text: "Verification Code Sent to your mail",
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        setloading(false);

        console.log("IN HERE");
        console.log(error?.response?.data);
        Toasty("error", `🦄 Invalid Email!`);
      }
    } else {
      setloading(false);

      Toasty("error", `Please enter a valid email`);
    }
  };
  const verifyCodeHandler = async () => {
    try {
      setloading(true);

      const body = { code, email: email };
      console.log("TEST");
      // try {
      const res = await api.post("/auth/userVerifyCode", body);
      if (res?.status == 200) {
        setloading(true);

        const body = {
          firstName,
          confirmpassword,
          email,
          lastName,
          password
        };
        console.log("body", body);
        await dispatch(userSignUpAction(body, history));
        setloading(false);

        closeModals();
      }
      setloading(false);
      console.log("res", res);
    } catch (error) {
      setloading(false);

      console.log("error", error?.response);
      // alert(error?.response?.data?.message)
      Toasty("error", `🦄 ${error?.response?.data?.message}!`);
    }
  };
  // const registerUserHandler = async () => {
  //   const emailvalidation = validateEmail(email);
  //   console.log("emmmm", emailvalidation);
  //   console.log("addEmployeeHandler");
  //   if (emailvalidation == true) {
  //     setloading(true);

  //     const body = {
  //       firstName,
  //       confirmpassword,
  //       email,
  //       lastName,
  //       password
  //     };
  //     console.log("body", body);
  //     await dispatch(userSignUpAction(body, history));
  //     setloading(false);
  //   } else {
  //     setloading(false);

  //     Toasty("error", `Please enter a valid email`);
  //   }
  // };
  useEffect(() => {
    getContentHandler();
  }, []);
  const getContentHandler = async () => {
    try {
      const res = await axios.get(`${baseURL}/user/privacyPolicy`);
      console.log("resres", res);
      setprivacypolicy(res?.data?.privacypolicy?.details);
      const ress = await axios.get(`${baseURL}/user/termsConditions`);

      settermscondition(ress?.data?.termscondition?.details);
    } catch (error) {}
  };
  return (
    <>
      <Header2 />
      <section className="login-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="for-head-h4 text-left">Register</h4>
              <p className="for-head-p text-left">
                If you are new here, we are glad to have you here.
              </p>
              <form className="loginform" action="login-home-page.php">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">First Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => {
                      setfirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Last Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="exampleInputEmail1">Password *</label>
                  <input
                    type={showicon ? "password" : "text"}
                    className="site-input right-icon enter-input"
                    placeholder="Enter Password"
                    name
                    id
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                  <i
                    onClick={() => setshowicon(!showicon)}
                    className={
                      showicon
                        ? "fa enter-icon-3 right-icon fa-eye-slash right-icon-90"
                        : "fa enter-icon-3 right-icon fa-eye right-icon-90"
                    }
                    aria-hidden="true"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="exampleInputEmail1">Confirm Password *</label>
                  <input
                    type={showicon2 ? "password" : "text"}
                    className="site-input right-icon enter-input"
                    placeholder="Confirm Password"
                    name
                    id
                    value={confirmpassword}
                    onChange={(e) => {
                      setconfirmpassword(e.target.value);
                    }}
                  />
                  <i
                    onClick={() => setshowicon2(!showicon2)}
                    className={
                      showicon2
                        ? "fa enter-icon-3 right-icon fa-eye-slash right-icon-90"
                        : "fa enter-icon-3 right-icon fa-eye right-icon-90"
                    }
                    aria-hidden="true"
                  />
                </div>
                {!loading ? (
                  <button
                    type="button"
                    className="btn btn-primary blue-btn2 d-flex m-auto"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target={
                      firstName?.length > 0 &&
                      email?.length > 0 &&
                      confirmpassword?.length > 0 &&
                      password?.length > 0 &&
                      lastName?.length > 0 &&
                      "#exampleModal"
                    }
                    onClick={() =>
                      firstName?.length > 0 &&
                      email?.length > 0 &&
                      confirmpassword?.length > 0 &&
                      password?.length > 0 &&
                      lastName?.length > 0
                        ? verifyEmailHandler()
                        : Toasty(
                            "error",
                            `Please fill out all the required fields`
                          )
                    }
                  >
                    Sign Up
                  </button>
                ) : (
                  <i className="fas fa-spinner fa-pulse"></i>
                )}

                <div className="text-center py-4">
                  <Link to="/Login" className="login-ristr">
                    Already have an Account?{" "}
                    <span className="blue-head">Login</span>
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <img
                src="assets/images/login-img.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h4 className=" text-left">Privacy Policy</h4>
              <p className=" for-head-p text-left mt-3">{privacypolicy}</p>
            </div>
            <div className="col-lg-6">
              <h4 className=" text-left">Terms and Condition</h4>
              <p className=" for-head-p text-left mt-3">{termscondition}</p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade off-pop"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body px-5 pb-5">
              <h4 className="for-head-h6 text-center pb-4 ">Verify Email</h4>
              <form className="loginform pt-0" action>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Enter Code*</label>
                  <InputNumber
                    min={0}
                    value={code}
                    onChange={setcode}
                    max={9}
                    className="form-control "
                  />
                </div>
                {!loading ? (
                  <button
                    type="button"
                    onClick={() =>
                      code?.length > 0
                        ? verifyCodeHandler()
                        : Toasty(
                            "error",
                            `Please fill out all the required fields`
                          )
                    }
                    className="btn btn-primary blue-btn2 d-flex m-auto"
                    // data-dismiss={code?.length > 0 && "modal"}
                    aria-label="Close"
                  >
                    Continue
                  </button>
                ) : (
                  <i className="fas fa-spinner fa-pulse"></i>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp2;
