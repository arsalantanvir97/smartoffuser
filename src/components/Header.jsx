import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import moment from "moment";

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logOutHandler = async () => {
    console.log("logOutHandler");
    dispatch(logout());
  };
  return (
    <>
      <section className="for-header">
        <div className="container">
          <nav className="navbar navbar-expand-xl navbar-light">
            <Link to="/Dashboard" className="navbar-brand">
              <img src="assets/images/logo.png" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse align-items-center"
              id="navbarNav"
            >
              <ul className="login-ul d-flex align-items-center ml-auto">
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className=" dropdown-toggle2 headbtn"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={() => {
                        history.push("/Notification");
                      }}
                    >
                      <i className="far fa-bell" />
                    </button>
                    {/* <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item py-2"
                        href="notifications.php"
                      >
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="fas fa-bell notifications-bell  mr-3" />
                          </div>
                          <div className="media-body">
                            <p className="notification-text font-small-3 text-muted">
                              Your Subscription will expire are
                            </p>
                            <div className="notification-below-info">
                              <small>
                                <time
                                  className="media-meta blue-head"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  3 Days.
                                </time>
                              </small>
                              <small>
                                <time
                                  className="c2 blue-head "
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  5 mins ago
                                </time>
                              </small>
                            </div>
                          </div>
                          <div className="media-right align-self-center"></div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item py-2"
                        href="notifications.php"
                      >
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="fas fa-bell notifications-bell  mr-3" />
                          </div>
                          <div className="media-body">
                            <p className="notification-text font-small-3 text-muted">
                              Your Subscription will expire are
                            </p>
                            <div className="notification-below-info">
                              <small>
                                <time
                                  className="media-meta blue-head"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  3 Days.
                                </time>
                              </small>
                              <small>
                                <time
                                  className="c2 blue-head"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  5 mins ago
                                </time>
                              </small>
                            </div>
                          </div>
                          <div className="media-right align-self-center"></div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item py-2"
                        href="notifications.php"
                      >
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="fas fa-bell notifications-bell  mr-3" />
                          </div>
                          <div className="media-body">
                            <p className="notification-text font-small-3 text-muted">
                              Your Subscription will expire are
                            </p>
                            <div className="notification-below-info">
                              <small>
                                <time
                                  className="media-meta blue-head"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  3 Days.
                                </time>
                              </small>
                              <small>
                                <time
                                  className="c2 blue-head"
                                  dateTime="2015-06-11T18:29:20+08:00"
                                >
                                  5 mins ago
                                </time>
                              </small>
                            </div>
                          </div>
                          <div className="media-right align-self-center"></div>
                        </div>
                      </a>
                      <div className="text-center">
                        <a href="notifications.php" className="blue-head">
                          View All
                        </a>
                      </div>
                    </div> */}
                  </div>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className=" dropdown-toggle headbtn"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div
                        style={{
                          width: "45px",
                          height: "52px",
                          marginRight:9,
                        }}
                      >
                        <img
                          src={
                            userInfo?.userImage && userInfo?.userImage !== null
                              ? `${imageURL}${userInfo?.userImage}`
                              : "assets/images/usr.png"
                          }
                          style={{ width: "100%",
                         
                            height: "100%",
                        borderRadius:'50px'
                        }}
                          alt=""
                        />{" "}
                      </div>

                      {userInfo?.firstName + " " + userInfo?.lastName}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="dropdown-item" to="/Dashboard">
                        <i className="far fa-user" /> Dashboard
                      </Link>
                      <hr />
                      <Link
                        to="#"
                        onClick={logOutHandler}
                        className="dropdown-item"
                        data-toggle="modal"
                        data-target="#logout"
                      >
                        <i className="fas fa-sign-out-alt" /> Logout
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
