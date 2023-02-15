import React, { useState, useEffect } from "react";
import { baseURL } from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Padgination";
import { useSelector } from "react-redux";
import moment from "moment";

const Notification = () => {
  const [notifcation, setnotification] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    handleGetUsers();
  }, [page, perPage, from, to, status, searchString]);

  const handleGetUsers = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/notification/usernotificationlogs`,
        method: "GET",
        params: {
          page,
          perPage,
          searchString,
          from,
          to,
          status
        },
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });

      console.log("res", res);
      setnotification(res.data?.notification);
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <section className="board">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Link to="/Dashboard">
              <i className="fas fa-chevron-left arow-l" />
            </Link>
            <h4 className="for-head-h4">Notifications</h4>
          </div>
        </div>
        {notifcation?.docs?.length > 0 ? (
          notifcation?.docs?.map((not, index) => (
            <div className="card wap px-5">
              <div className="row">
                <div className="col-12 col-xl-12">
                  <div className="media align-items-center">
                    <img
                      src="assets/images/bel.png"
                      className="mr-5"
                      alt="..."
                    />
                    <div className="media-body">
                      <h5 className="mt-0 notif"> {" " + not.body}</h5>
                      <p className="blue-head">
                        {moment(not?.createdAt).fromNow()}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 style={{ marginTop: 20 }}>No Notification</h5>
        )}
      </div>
    </section>
  );
};

export default Notification;
