import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userverfyadnresetpasword } from "../actions/userActions";
import Toasty from "../utils/toast";
const ChangePassword = ({ history }) => {
  const dispatch = useDispatch();
  const [existingpassword, setexistingpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);
  const [showicon3, setshowicon3] = useState(true);
  const [loading, setloading] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const submitHandler = async () => {
    console.log("submitHandler");
    console.log(
      "submitHandlerreqbody",
      existingpassword,
      newpassword,
      confirm_password
    );
    setloading(true);

    await dispatch(
      userverfyadnresetpasword(
        existingpassword,
        newpassword,
        confirm_password,
        userInfo?.email,
        history
      )
    );
    setloading(false);

    setexistingpassword("");
    setnewpassword("");
    setconfirm_password("");
  };
  return (
    <section className="board">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Link to="/Dashboard">
              <i className="fas fa-chevron-left arow-l" />
            </Link>
            <h4 className="for-head-h4">Change Password</h4>
          </div>
        </div>
        <div className="card wap2 px-5">
          <div className="row">
            <div className="col-12 col-xl-4 offset-xl-4">
              <form>
                <div className="form-group">
                  <div className="form-field">
                    <label htmlFor="exampleInputPassword1">
                      Current Password*
                    </label>
                    <input
                      type={showicon ? "password" : "text"}
                      className="site-input right-icon enter-input"
                      placeholder="Enter Current Password"
                      name
                      value={existingpassword}
                      onChange={(e) => {
                        setexistingpassword(e.target.value);
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
                </div>
                <div className="form-group">
                  <div className="form-field">
                    <label htmlFor="exampleInputPassword1">New Password*</label>
                    <input
                      type={showicon2 ? "password" : "text"}
                      className="site-input right-icon enter-input"
                      placeholder="Enter New Password"
                      name
                      value={newpassword}
                      onChange={(e) => {
                        setnewpassword(e.target.value);
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
                </div>
                <div className="form-group">
                  <div className="form-field">
                    <label htmlFor="exampleInputPassword1">
                      Confirm Password*
                    </label>
                    <input
                      type={showicon3 ? "password" : "text"}
                      className="site-input right-icon enter-input"
                      placeholder="Confirm Password"
                      name
                      value={confirm_password}
                      onChange={(e) => {
                        setconfirm_password(e.target.value);
                      }}
                    />
                    <i
                      onClick={() => setshowicon3(!showicon3)}
                      className={
                        showicon3
                          ? "fa enter-icon-3 right-icon fa-eye-slash right-icon-90"
                          : "fa enter-icon-3 right-icon fa-eye right-icon-90"
                      }
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-12 text-center py-2">
              {!loading ? (
                <Link
                  to="#"
                  className="btn btn-primary blue-btn2"
                  data-toggle="modal"
                  data-target="#update"
                  onClick={() =>
                    existingpassword?.length > 0 &&
                    newpassword?.length > 0 &&
                    confirm_password?.length > 0
                      ? submitHandler()
                      : Toasty(
                          "error",
                          `Please fill out all the required fields!`
                        )
                  }
                >
                  Update
                </Link>
              ) : (
                <i className="fas fa-spinner fa-pulse"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
