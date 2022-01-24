import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Toasty from "../utils/toast";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
const MyDocument = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [folderName, setfolderName] = useState("");
  const [doc_schedule, setdoc_schedule] = useState("");
  const [doc_file, setdoc_file] = useState("");
  const [render, setrender] = useState(false);
  const [userdata, setuserdata] = useState([]);
  const [userdetails, setuserdetails] = useState();

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/user/getUserDetailsandCheckSubscrptionExpiry/${userInfo?._id}`,
        method: "GET",

        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });
      console.log("handleGetUserres", res);
      setuserdetails(res?.data?.user);
      if (!res?.data?.user?.subscriptionid) {
        await Swal.fire({
          icon: "info",
          title: "",
          text: "Please subscribe to one of our package to manage your documents",
          showConfirmButton: false,
          timer: 1500
        });
        history.push("/Packages");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const redirectToFolderView = (id) => {
    history.push(`/MyDocumentView/${id}`);
  };
  // useEffect(async () => {
  //   if (!userInfo?.subscription) {
  //     await Swal.fire({
  //       icon: "info",
  //       title: "",
  //       text: "Please subscribe to one of our package to manage your documents",
  //       showConfirmButton: false,
  //       timer: 1500
  //     });
  //     history.push("/Packages");
  //   }
  // }, [userInfo]);

  const getDocsofUser = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/folder/getallfilesfolder`,
        { userid: userInfo?._id },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        }
      );
      setuserdata(res?.data?.userdata);
      console.log("PackageDetails", res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDocsofUser();
  }, [render]);

  const folderdocsHandler = (e) => {
    console.log("eeee", e?.target?.files[0]);
    setdoc_schedule(e?.target?.files[0]);
  };
  const filedocsHandler = (e) => {
    console.log("eeee", e?.target?.files[0]);
    setdoc_file(e?.target?.files[0]);
  };
  const submitHandler = async () => {
    const formData = new FormData();
    formData.append("doc_schedule", doc_schedule);
    formData.append("folderName", folderName);
    formData.append("userid", userInfo?._id);

    const body = formData;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      };

      console.log("createfolder");

      const res = await axios.post(
        `${baseURL}/folder/createFolder`,
        body,
        config
      );

      console.log("res", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Folder Uploaded Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.log("error", error);
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Internal Server Error",
        showConfirmButton: false,
        timer: 1500
      });
    }
    setdoc_schedule("");
    setfolderName("");
    setrender(!render);
  };

  const submitFileHandler = async () => {
    const formData = new FormData();
    formData.append("doc_schedule", doc_file);
    formData.append("userid", userInfo?._id);

    const body = formData;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      };

      console.log("createFile");

      const res = await axios.post(
        `${baseURL}/folder/createFile`,
        body,
        config
      );

      console.log("res", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "File Uploaded Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.log("error", error);
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Internal Server Error",
        showConfirmButton: false,
        timer: 1500
      });
    }
    setdoc_file("");
    setrender(!render);
  };
  const deleteFolderHandler = async (id) => {
    console.log("id", id);
    try {
      const res = await axios({
        url: `${baseURL}/folder/deleteFolder/${id}`,
        method: "GET",

        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });
      Swal.fire({
        icon: "success",
        title: "",
        text: "Folder Deleted Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      getDocsofUser();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: err?.response?.data?.message
          ? err?.response?.data?.message
          : "Internal Server Error",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const deleteFileHandler = async (id) => {
    console.log("id", id);
    try {
      const res = await axios({
        url: `${baseURL}/folder/deleteFile/${id}`,
        method: "GET",

        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });
      Swal.fire({
        icon: "success",
        title: "",
        text: "File Deleted Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      getDocsofUser();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: err?.response?.data?.message
          ? err?.response?.data?.message
          : "Internal Server Error",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };
  return (
    <>
      <section className="board">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Link to="/Dashboard">
                <i className="fas fa-chevron-left arow-l" />
              </Link>
              <h4 className="for-head-h4">My Documents</h4>
              <p className="text-center blue-head">
                {userdetails?.subscriptionid?.packagename} Package
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-3">
              <div className="row align-items-center">
                <div className="col-3">
                  <p>Filter</p>
                </div>
                <div className="col-9">
                  <form className action="login-home-page.php">
                    <div className="form-group">
                      <select
                        className="form-control smrt-of-inpt"
                        id="exampleFormControlSelect1"
                      >
                        <option>select</option>
                        <option>2</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Find Document"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div className="col-6">
                  <a
                    href="#_"
                    className="btn btn-primary blue-btn3"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#upld"
                  >
                    Upload
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="#_"
                    className="btn btn-primary blue-btn4"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#packg"
                  >
                    New Folder
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {userdata?.length > 0 &&
              userdata?.map((data) => (
                <div className="col-lg-3">
                  <div className="card work-card">
                    <div className="card-body text-center">
                      <img
                        src={
                          data?.folderName
                            ? "assets/images/folder.png"
                            : data?.docfile?.includes("docx")
                            ? "assets/images/word-pic.png"
                            : data?.docfile?.includes("pdf")
                            ? "assets/images/icon-pdf.png"
                            : null
                        }
                        alt=""
                      />
                      <p>
                        {data?.fileArr?.length}{" "}
                        {data?.fileArr?.length > 0 ? "File" : null}
                      </p>
                      <h4 className="card-title">
                        {data?.folderName
                          ? data?.folderName
                          : data?.docfile
                          ? data?.docfile
                          : null}{" "}
                        {data?.folderName ? "Folder" : null}
                      </h4>
                    </div>
                    <div className="btn-group2 mr-1 mb-1">
                      <button
                        type="button"
                        className="btn btn-drop-table btn-sm"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i className="fa fa-ellipsis-v" />
                      </button>
                      <div
                        className="dropdown-menu"
                        x-placement="bottom-start"
                        style={{
                          position: "absolute",
                          transform: "translate3d(0px, 23px, 0px)",
                          top: "0px",
                          left: "0px",
                          willChange: "transform"
                        }}
                      >
                        <Link
                          to="#"
                          onClick={() => {
                            data?.folderName
                              ? redirectToFolderView(data?._id)
                              : window.open(
                                  `${imageURL}${data?.docfile}`,
                                  "_blank"
                                );
                          }}
                          className="dropdown-item"
                        >
                          View
                        </Link>
                        <hr />
                        <Link
                          to="#"
                          className="dropdown-item"
                          data-dismiss="modal"
                          data-toggle="modal"
                          data-target="#delt"
                          onClick={() => {
                            data?.folderName
                              ? deleteFolderHandler(data?._id)
                              : deleteFileHandler(data?._id);
                          }}
                        >
                          DELETE
                        </Link>
                        <hr />
                        {!data?.folderName && (
                          <Link
                            to="#"
                            onClick={() =>
                              window.open(
                                `${imageURL}${data?.docfile}`,
                                "_blank"
                              )
                            }
                            className="dropdown-item"
                          >
                            Print
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="row py-4 text-center">
            <div className="col-lg-12">
              <a href="#_" className="btn btn-primary blue-btn2">
                View All
              </a>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade off-pop"
        id="packg"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body px-5 pb-5">
              <h4 className="for-head-h6 text-center pb-4 ">Create Folder</h4>
              <form className="loginform pt-0" action>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Enter Name *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    value={folderName}
                    onChange={(e) => {
                      setfolderName(e.target.value);
                    }}
                  />
                </div>
                <div className="card work-card-4 h-12">
                  <div className="card-body">
                    {/* <div className="d-flex align-items-center">
                <img src="assets/images/file2.png" alt="" />
                <div className="file btn btn-lg upload">
                  <i className="fas fa-upload" />
                  <p>Upload Files</p>
                  <input
                      type="file"
                      accept="application/pdf,application/vnd.ms-excel"
                      onChange={filedocsHandler}
                    />
                </div>
              </div> */}
                    <div className="form-group">
                      <label htmlFor>
                        Upload File <span className="fc-red">*</span>
                      </label>
                      <div className="file-inpt">
                        <input
                          type="file"
                          accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                          onChange={folderdocsHandler}
                        />
                        {/* <input type="file" onChange={filedocsHandler} /> */}
                        <i className="fas fa-cloud-upload-alt" />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    folderName?.length > 0 && doc_schedule?.name?.length > 0
                      ? submitHandler()
                      : Toasty(
                          "error",
                          `Please fill out all the required fields`
                        )
                  }
                  className="btn btn-primary blue-btn2 d-flex m-auto"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade off-pop"
        id="upld"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body px-5 pb-5">
              <h4 className="for-head-h6 text-center pb-4 ">New File</h4>
              <form className="loginform pt-0" action>
                <div className="card work-card-4 h-12">
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor>
                        Upload File <span className="fc-red">*</span>
                      </label>
                      <div className="file-inpt">
                        <input
                          type="file"
                          accept=".xlsx,.xls,.doc,.docx,.ppt, .pptx,.txt,.pdf"
                          onChange={filedocsHandler}
                        />
                        {/* <input type="file" onChange={filedocsHandler} /> */}
                        <i className="fas fa-cloud-upload-alt" />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary blue-btn2 d-flex m-auto"
                      data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#confrm"
                      onClick={() =>
                        doc_file.name?.length > 0
                          ? submitFileHandler()
                          : Toasty(
                              "error",
                              `Please fill out all the required fields`
                            )
                      }
                    >
                      Upload File
                    </button>
                    <div
                      className="alert alert-danger my-2 for-alart"
                      role="alert"
                    >
                      Files will be deleted automatically after 24 hours
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDocument;
