import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userResetPasswordAction } from "../actions/userActions";
import Header2 from "../components/Header2";
import Toasty from "../utils/toast";
const ResetPassword = (props) => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  const [password, setpassword] = useState();
  const [confirm_password, setconfirm_password] = useState();
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);

  const onSubmitHandler = async () => {
    setloading(true);
    console.log(
      "body",
      password,
      confirm_password,
      props?.location?.state?.code,
      props?.location?.state?.email
    );

    await dispatch(
      userResetPasswordAction(
        password,
        confirm_password,
        props?.location?.state?.code,
        props?.location?.state?.email
      )
    );
    setloading(false);
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
              <form className="loginform">
                <div className=" form-group mb-2 form-field">
                  <label htmlFor="exampleInputPassword1">New Password *</label>
                  <input
                    type={showicon ? "password" : "text"}
                    className="form-control site-input right-icon enter-input"
                    id="exampleInputPassword1"
                    placeholder="New Password"
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
                <div className=" form-group mb-2 form-field">
                  <label htmlFor="exampleInputPassword1">
                    Confrim Password *
                  </label>
                  <input
                    type={showicon2 ? "password" : "text"}
                    className="form-control site-input right-icon enter-input"
                    id="exampleInputPassword1"
                    placeholder="Confirm Password"
                    value={confirm_password}
                    onChange={(e) => {
                      setconfirm_password(e.target.value);
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
                ) : (
                  <i className="fas fa-spinner fa-pulse"></i>
                )}
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
