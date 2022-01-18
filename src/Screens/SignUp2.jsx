import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header2 from "../components/Header2";
import Toasty from "../utils/toast";

import { userSignUpAction } from "../actions/userActions";

const SignUp2 = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.replace("/Home");
    }
  }, [userInfo]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const dispatch = useDispatch();

  const registerUserHandler = async () => {
    const body = {
      firstName,
      confirmpassword,
      email,
      lastName,
      password
    };
console.log('body',body);
    await dispatch(userSignUpAction(body, history));
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
                    type="password"
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
                    className="fa fa-eye-slash enter-icon right-icon"
                    aria-hidden="true"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="exampleInputEmail1">Confirm Password *</label>
                  <input
                    type="password"
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
                    className="fa fa-eye-slash enter-icon right-icon"
                    aria-hidden="true"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary blue-btn2 d-flex m-auto"
                  onClick={() =>
                    firstName?.length > 0 &&
                    email?.length > 0 &&
                    confirmpassword?.length > 0 &&
                    password?.length > 0 &&
                    lastName?.length > 0 ? 
                      registerUserHandler()
                      : Toasty(
                          "error",
                          `Please fill out all the required fields`
                        )
                  }
                >
                  Sign Up
                </button>
                <div className="text-center py-4">
                  <Link to='/Login' className="login-ristr">
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
        </div>
      </section>
    </>
  );
};

export default SignUp2;
