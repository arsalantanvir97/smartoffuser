import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Toasty from "../utils/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header2 from "../components/Header2";
import { handleChange } from "../utils/InputNumberValidation";
import InputNumber from "../components/InputNumber";
const VerificationCOde = ({ match, history }) => {
  const [loading, setloading] = useState(false);

  const [code, setcode] = useState();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const onSubmitHandler = async () => {
    try {
      setloading(true);
      console.log("body", code, match?.params?.email);
      const body = { code, email: match?.params?.email };
      console.log("TEST");
      // try {
      const res = await api.post("/user/userverifyRecoverCode", body);
      setloading(false);
      console.log("res", res);
      history?.push({
        pathname: "/resetPassword",
        state: { code: code, email: match?.params?.email }
      });
    } catch (error) {
      setloading(false);

      console.log("error", error?.response);
      // alert(error?.response?.data?.message)
      Toasty("error", `🦄 ${error?.response?.data?.message}!`);
    }
  };

  const resentCodeHandler = async (e) => {
    e.preventDefault();
    const useremail = match?.params?.email;
    const body = { email: useremail };

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
      }
    } catch (error) {
      console.log(error.response);
      Toasty("error", `🦄 Invalid Email!`);
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
              <p className="for-head-p text-left py-2">
                Please Enter The Verification Code Sent To Your Email Address.
              </p>
              <form className="loginform">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Verification Code *
                  </label>
                  <InputNumber
                    min={0}
                    value={code}
                    onChange={setcode}
                    max={9}
                    className="form-control "
                  />
                </div>
                <div className="form-group form-check d-flex justify-content-end">
                  <label
                    className="form-check-label org-colr"
                    htmlFor="exampleCheck1"
                  >
                    <Link
                      to="#"
                      onClick={resentCodeHandler}
                      className="blue-head"
                    >
                      {" "}
                      Not Received? Resend Again!
                    </Link>
                  </label>
                </div>
                <div className="mx-auto my-4 text-center">
                  {!loading ? (
                    <Link
                      to="#"
                      onClick={() =>
                        code?.length > 0
                          ? onSubmitHandler()
                          : Toasty(
                              "error",
                              `Please fill out all the required fields`
                            )
                      }
                      className="btn blue-btn2 "
                    >
                      Continue
                    </Link>
                  ) : (
                    <i className="fas fa-spinner fa-pulse"></i>
                  )}
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

export default VerificationCOde;
