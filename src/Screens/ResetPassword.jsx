import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userResetPasswordAction } from "../actions/userActions";
import Header2 from "../components/Header2";
import Toasty from "../utils/toast";
const ResetPassword = (props) => {
  const dispatch = useDispatch();

  const [password, setpassword] = useState();
  const [confirm_password, setconfirm_password] = useState();

  const onSubmitHandler = () => {
    console.log(
      "body",
      password,
      confirm_password,
      props?.location?.state?.code,
      props?.location?.state?.email
    );

    dispatch(
      userResetPasswordAction(
        password,
        confirm_password,
        props?.location?.state?.code,
        props?.location?.state?.email
      )
    );
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
                Please Enter New Password
              </p>
              <form className="loginform" action="login-home-page.php">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">New Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter New Password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Confirm Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Confirm Password"
                    value={confirm_password}
                    onChange={(e) => {
                      setconfirm_password(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary blue-btn2 d-flex mx-auto my-4"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() =>
                    confirm_password?.length > 0 && password?.length > 0
                      ? onSubmitHandler()
                      : Toasty(
                          "error",
                          `Please fill out all the required fields`
                        )
                  }
                >
                  Update
                </button>
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

export default ResetPassword;
