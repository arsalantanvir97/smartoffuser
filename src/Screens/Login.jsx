import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLoginAction } from "../actions/userActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header2 from "../components/Header2";
import Toasty from "../utils/toast";
import { validateEmail } from "../utils/ValidateEMail";
const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showicon, setshowicon] = useState(true);
  const [loading, setloading] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const submitHandler = async () => {
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      setloading(true);

      console.log("submitHandler");
      await dispatch(userLoginAction(email, password, history));
      setloading(false);
    } else {
      Toasty("error", `Please enter a valid email`);
      setloading(false);
    }
  };

  useEffect(() => {
    if (userInfo) {
      history.replace("/Dashboard");
    }
  }, [userInfo]);
  return (
    <>
      <Header2 />
      <section className="login-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="for-head-h4 text-left">User Login</h4>
              <p className="for-head-p text-left">
                If you have an account, sign in with your email address.
              </p>
              <form className="loginform">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address *</label>
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
                <div className=" form-group mb-2 form-field">
                  <label htmlFor="exampleInputPassword1">Password*</label>
                  <input
                    type={showicon ? "password" : "text"}
                    className="form-control site-input right-icon enter-input"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
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

                <div className="form-group form-check d-flex justify-content-between">
                  {/* <input
                    type="checkbox"
                    className="form-check-input my-check"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label log"
                    htmlFor="exampleCheck1"
                  >
                    Remember Me
                  </label> */}
                  <label
                    className="form-check-label org-colr"
                    htmlFor="exampleCheck1"
                  >
                    <Link to="/forgotpassword" className="blue-head">
                      {" "}
                      Forgot Password?
                    </Link>
                  </label>
                </div>
                {!loading ? (
                  <button
                    type="button"
                    className="btn btn-primary blue-btn2 d-flex m-auto"
                    onClick={() =>
                      email?.length > 0 && password?.length > 0
                        ? submitHandler()
                        : Toasty(
                            "error",
                            `Please fill out all the required fields`
                          )
                    }
                  >
                    Login
                  </button>
                ) : (
                  <i className="fas fa-spinner fa-pulse"></i>
                )}
                <div className="text-center mt-4">
                  <Link to="/SignUp" className="login-ristr">
                    New Here?{" "}
                    <span className="blue-head"> Register Your Account</span>
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

export default Login;
