import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import Toasty from "../utils/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Header2 from "../components/Header2";
import { validateEmail } from "../utils/ValidateEMail";

const ForgotPassword = ({ history }) => {
  const [email, setemail] = useState("");
  const submitHandler = async () => {
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      const body = { email };
      console.log("TEST");
      try {
        const res = await api.post("/user/userRecoverPassword", body);
        console.log("res", res);
        if (res?.status == 201) {
          Swal.fire({
            icon: "success",
            title: "SUCCESS",
            text: "Verification Code Sent to your mail",
            showConfirmButton: false,
            timer: 1500
          });
          history.push({
            pathname: "/verificationcode",
            state: { email }
          });
        }
      } catch (error) {
        console.log("IN HERE");
        console.log(error?.response?.data);
        Toasty("error", `🦄 Invalid Email!`);
      }
    } else {
      Toasty("error", `Please enter a valid email`);
    }
  };
  return (
    <>
      <Header2 />

      <section className="login-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="for-head-h4 text-left">Password Recovery</h4>
              <p className="for-head-p text-left">
                Lost your Password? Don't Worry we can help you.
              </p>
              <form className="loginform" action="login-home-page.php">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
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
                {/* <button type="button" class="btn btn-primary blue-btn2 d-flex mx-auto my-4">Continue</button> */}
                <div className="mx-auto my-4 text-center">
                  <Link
                    to="#"
                    onClick={() =>
                      email?.length > 0
                        ? submitHandler()
                        : Toasty(
                            "error",
                            `Please fill out all the required fields`
                          )
                    }
                    className="btn blue-btn2 "
                  >
                    Continue
                  </Link>
                </div>
                <div className="text-center">
                  <Link to="/Login" className="login-ristr">
                    Back to Login
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <img
                src="assets/images/pas-recvr-img.png"
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

export default ForgotPassword;
