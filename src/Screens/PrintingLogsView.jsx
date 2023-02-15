import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PrintingLogsView = ({ match, history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [printdetails, setprintdetails] = useState();
  useEffect(() => {
    handlegetprintDetails();
  }, []);
  const handlegetprintDetails = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/print/print-details/${match?.params?.id}`,
        method: "GET",

        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });
      setprintdetails(res?.data?.print);
      console.log("printDetails", res);
    } catch (err) {
      console.log(err);
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
            <h4 className="for-head-h4">Printing Logs</h4>
            <h6 className="blue-head text-center">
              {printdetails?.documentname}
            </h6>
            <h6 className="text-center">
              {" "}
              {moment.utc(printdetails?.createdAt).format("LL")}
            </h6>
          </div>
        </div>
        <div className="card wap">
          <div className="row">
            <div className="col-12 col-xl-3 order-sm-1"></div>
            <div className="col-12 col-xl-6 order-sm-2 ">
              <div className="row">
                <div className="col-md-6 col-12">
                  <p className="py-2">Print ID</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">{printdetails?._id}</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">Printer ID</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">{printdetails?.requestformachine?._id}</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">Number of Pages</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">{printdetails?.pages}</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">Print Location</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">
                    {printdetails?.requestformachine?.branchid?.address}
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">Type</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">{printdetails?.type}</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">Cost Per Page</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">${printdetails?.costperpage}</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">Total Cost</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">${printdetails?.totalcost}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-3 order-sm-1 order-xl-3">
              <i className="fas fa-file" />
              <span>Attachment</span>
              <br />
              <Link
                to="#"
                onClick={() =>
                  window.open(`${imageURL}${printdetails?.doc}`, "_blank")
                }
                className="blue-head"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="fas fa-eye" />
                <span>View</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintingLogsView;
