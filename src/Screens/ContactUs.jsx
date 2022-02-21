import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { baseURL } from "../utils/api";
import Toasty from "../utils/toast";
import { validateEmail } from "../utils/ValidateEMail";

const ContactUs = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [email, setemail] = useState("");

  const submitHandler = async () => {
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      try {
        const res = await axios.post(
          `${baseURL}/feedback/create-feedback`,
          {
            firstName,
            lastName,
            subject,
            message,
            email,
            type: "User"
          },
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`
            }
          }
        );
        if (res?.status == 201) {
          history?.push("/Dashboard");
          Swal.fire({
            icon: "success",
            title: "",
            text: "Form sent successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "",
          text: "Something went wrong",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } else {
      Toasty("error", `Please enter a valid email`);
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
            <h4 className="for-head-h4">Contact Us</h4>
            <p className="text-center">Got Any Queries? Fill the form below!</p>
          </div>
        </div>
        <div className="card wap2 px-5">
          <div className="row">
            <div className="col-12 col-xl-12">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">First Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Enter First Name"
                      value={firstName}
                      onChange={(e) => {
                        setfirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Last Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Enter Last Name"
                      value={lastName}
                      onChange={(e) => {
                        setlastName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email Address*</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Subject*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Enter Subject"
                      value={subject}
                      onChange={(e) => {
                        setsubject(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="exampleFormControlTextarea1">
                      Message*
                    </label>
                    <textarea
                      className="form-control rund"
                      id="exampleFormControlTextarea1"
                      rows={6}
                      placeholder="Enter Your Message"
                      value={message}
                      onChange={(e) => {
                        setmessage(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-12 text-center py-2">
              <Link
                to="#"
                onClick={() =>
                  firstName?.length > 0 &&
                  lastName?.length > 0 &&
                  subject?.length > 0 &&
                  message?.length > 0 &&
                  email?.length > 0
                    ? submitHandler()
                    : Toasty("error", `Please fill out all the required fields`)
                }
                className="btn btn-primary blue-btn2"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
