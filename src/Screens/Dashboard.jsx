import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="board">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="for-head-h4">Dashboard</h4>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-lg-4">
            <div className="card work-card">
              <Link to="/Profile">
                <div className="card-body text-center">
                  <img src="assets/images/man.png" alt="" />
                  <h4 className="card-title">My Profile</h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card work-card">
              <Link to="/MyDocument">
                <div className="card-body text-center">
                  <img src="assets/images/contract.png" alt="" />
                  <h4 className="card-title">My Documents</h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card work-card">
              <Link to="/LocatePrinter">
                <div className="card-body text-center">
                  <img src="assets/images/pin.png" alt="" />
                  <h4 className="card-title">Locate Printer</h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card work-card">
              <Link to="/Packages">
                <div className="card-body text-center">
                  <img src="assets/images/money.png" alt="" />
                  <h4 className="card-title">Packages</h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card work-card">
              <Link to="/ContactUs">
                <div className="card-body text-center">
                  <img src="assets/images/contacts.png" alt="" />
                  <h4 className="card-title">Contact Us</h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card work-card">
              <Link to="/PrintingLogs">
                <div className="card-body text-center">
                  <img src="assets/images/logs.png" alt="" />
                  <h4 className="card-title">Printing Logs</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
