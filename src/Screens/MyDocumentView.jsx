import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Toasty from "../utils/toast";
import StripeCheckout from "react-stripe-checkout";
import Loading from "../components/Loading";
import { closeModals } from "../utils/closeModals";
import { handleChange } from "../utils/InputNumberValidation";
import { SunspotLoader } from "react-awesome-loaders";
import InputNumber from "../components/InputNumber";

const MyDocumentView = ({ match, history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [loading, setloading] = useState(false);

  const [folderDetails, setfolderDetails] = useState([]);
  const [doc_file, setdoc_file] = useState("");
  const [filename, setfilename] = useState("");

  const [machines, setmachines] = useState([]);
  const [printData, setprintData] = useState();
  const [pages, setpages] = useState();
  const [type, settype] = useState();
  const [settings, setsettings] = useState();
  const [printcost, setprintcost] = useState(0);
  const [selectedFile, setselectedFile] = useState();

  useEffect(() => {
    handlegetFolderDetails();
    getAllPrinters();
    getSetting();
  }, []);

  const getAllPrinters = async () => {
    try {
      const res = await axios.get(
        `${baseURL}/requestmachine/getRequestMachine`,

        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        }
      );
      if (res?.status == 201) {
        console.log("res", res?.data);
        setmachines(res?.data?.requestmachine);
      }
    } catch (error) {}
  };
  const getSetting = async () => {
    try {
      const res = await axios.get(
        `${baseURL}/settings/gettingsettings`,

        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        }
      );
      if (res?.status == 201) {
        console.log("res", res?.data);
        setsettings(res?.data?.setting);
      }
    } catch (error) {}
  };
  const handlegetFolderDetails = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/folder/folderDetails/${match?.params?.id}`,
        method: "GET",

        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });
      setfolderDetails(res?.data?.folder);
      console.log("folderDetails", res);
    } catch (err) {
      console.log(err);
    }
  };
  const filedocsHandler = (e) => {
    console.log("eeee", e?.target?.files[0]);
    setdoc_file(e?.target?.files[0]);
  };
  const submitFileHandler = async () => {
    const formData = new FormData();
    formData.append("doc_schedule", doc_file);
    formData.append("folderid", match?.params?.id);
    formData.append("filename", filename);

    const body = formData;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      };

      console.log("createFile");

      const res = await axios.post(
        `${baseURL}/folder/uploadFilesinaFolder`,
        body,
        config
      );

      console.log("res", res);
      if (res?.status == 201) {
        closeModals();
        Swal.fire({
          icon: "success",
          title: "",
          text: "File Uploaded Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        handlegetFolderDetails();
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
    setfilename("");
  };

  const deleteFileHandler = async (index) => {
    console.log("index", index);
    try {
      const res = await axios({
        url: `${baseURL}/folder/deleteFileinFolder/${match?.params?.id}`,
        method: "POST",
        data: { index },
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
      handlegetFolderDetails();
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
  const filterHandler = async (searchString) => {
    console.log("searchString", searchString);
    try {
      const res = await axios({
        url: `${baseURL}/folder/searchFilesinaFolder`,
        method: "POST",
        data: { searchString, folderid: match?.params?.id },
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });
      console.log("fileres", res);
      setfolderDetails(res?.data?.folder);
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

  const updateTotalCostHandler = (value) => {
    settype(value);
    console.log(
      "updateTotalCostHandler",
      value,
      settings.costforcolor,
      settings.costforblackandwhite
    );
    const costperpage =
      value == "Color" ? settings.costforcolor : settings.costforblackandwhite;
    const totalcost = costperpage * pages;

    console.log("costperpage", costperpage, totalcost);
    setprintcost(totalcost);
  };

  async function handleToken(token) {
    closeModals();
    setloading(true);
    console.log("handleToken");
    const config = {
      header: {
        Authorization: "Bearer sk_test_OVw01bpmRN2wBK2ggwaPwC5500SKtEYy9V"
      }
    };
    const response = await axios.post(
      `${baseURL}/checkout`,
      { token, product: printcost },
      config
    );
    console.log("response", response);
    const { source } = response.data;
    let printinfo = JSON.parse(printData);
    console.log(
      "res",
      response.data.id,
      response.data.status,
      response.headers.date,
      response.data.receipt_email
    );

    const res = await axios.post(
      `${baseURL}/print/create-Print`,
      {
        vendorid: printinfo?.vendorid?._id,
        documentname: selectedFile,
        pages: pages,
        type,
        card_holder_name: response?.data?.billing_details?.name,
        card_number: response?.data?.payment_method_details?.last4,
        userid: userInfo?._id,
        userName: userInfo?.firstName,
        requestformachine: printinfo?._id,
        doc_schedule: selectedFile
      },
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      }
    );
    setloading(false);
    if (res?.status == 201) {
      history?.push("/Dashboard");
      Swal.fire({
        icon: "success",
        title: "",
        text: "Print Created successfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <>
      {loading ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-30%, -60%)",
            zIndex: 1111111111111
          }}
        >
          <SunspotLoader
            gradientColors={["#000"]}
            shadowColor={"#FFF"}
            desktopSize={"50px"}
            mobileSize={"35px"}
          />
        </div>
      ) : (
        <>
          <section className="board">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <Link to="/Dashboard">
                    <i className="fas fa-chevron-left arow-l" />
                  </Link>
                  <h4 className="for-head-h4">My Documents</h4>
                  {/* <p className="text-center blue-head">ABC Package</p> */}
                </div>
              </div>
              <div className="row py-5">
                <div className="col-lg-3">
                  {/* <div class="row align-items-center">
              <div class="col-3">
                  <p>Filter</p>
              </div>
              <div class="col-9">
                  <form class="" action="login-home-page.php">
                      <div class="form-group">
                          <select class="form-control smrt-of-inpt" id="exampleFormControlSelect1">
                              <option>select</option>
                              <option>2</option>
                          </select>
                      </div>
                  </form>
              </div>
          </div> */}
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Search by File Name "
                      onChange={(e) => {
                        filterHandler(e.target.value);
                      }}
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
                    {/* <div class="col-6"><a href="#_" class="btn btn-primary blue-btn4" data-dismiss="modal"
                      data-toggle="modal" data-target="#packg">New Folder</a></div> */}
                  </div>
                </div>
              </div>
              <div className="row">
                {folderDetails?.fileArr?.length > 0 ? (
                  folderDetails?.fileArr?.map((filee, index) => (
                    <div className="col-lg-3">
                      <div className="card work-card">
                        <div className="card-body text-center">
                          <img
                            src={
                              filee?.filetype?.includes("docx")
                                ? "assets/images/word-pic.png"
                                : filee?.filetype?.includes("pdf")
                                ? "assets/images/icon-pdf.png"
                                : null
                            }
                            alt=""
                          />

                          <h4 className="card-title">{filee?.filename}</h4>
                          {/* <h6 className="card-title">{filee}</h6> */}
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
                              className="dropdown-item"
                              onClick={() => {
                                window.open(
                                  `${imageURL}${filee?.file}`,
                                  "_blank"
                                );
                              }}
                            >
                              View
                            </Link>
                            <hr />
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-dismiss="modal"
                              data-toggle="modal"
                              data-target="#delt"
                              onClick={() => {
                                deleteFileHandler(index);
                              }}
                            >
                              DELETE
                            </Link>
                            <hr />
                            <Link
                              className="dropdown-item"
                              to="#"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              onClick={() => {
                                setselectedFile(filee?.file);
                              }}
                            >
                              Print
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* <p className="text-center">{}</p> */}
                    </div>
                  ))
                ) : (
                  <h5>No File</h5>
                )}
              </div>
              {/* <div className="row py-4 text-center">
            <div className="col-lg-12">
              <a href="#_" className="btn btn-primary blue-btn2">
                View All
              </a>
            </div>
          </div> */}
            </div>
          </section>
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
                          <label htmlFor="exampleInputEmail1">
                            Enter File Name *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter File Name"
                            value={filename}
                            onChange={(e) => {
                              setfilename(e.target.value);
                            }}
                          />
                        </div>
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

          <div
            className="modal fade off-pop"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
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
                <div className="modal-body text-center py-4">
                  <div className="row">
                    <div className="col-lg-6 text-left">
                      <div className="fields">
                        <div className="f_wrap">
                          <span>Select Printer</span>
                          <select
                            id="show_entries"
                            value={printData}
                            onChange={(e) => {
                              setprintData(e.target.value);
                            }}
                          >
                            {machines?.length > 0 &&
                              machines?.map((machine) => (
                                <option value={JSON.stringify(machine)}>
                                  {machine?.branchid?.city}
                                </option>
                              ))}
                          </select>
                        </div>

                        <div className="f_wrap">
                          <p>No. of Pages</p>
                          <InputNumber
                            min={0}
                            value={pages}
                            onChange={setpages}
                            max={9}
                            className="form-control "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 text-left">
                      <div className="fields">
                        <div className="f_wrap">
                          <span>Select Type</span>
                          <select
                            id="show_entries"
                            value={type}
                            onChange={(e) => {
                              updateTotalCostHandler(e.target.value);
                            }}
                          >
                            <option>select</option>
                            <option value={"Color"}>Color</option>
                            <option value={"Black and White"}>
                              Black and White
                            </option>
                          </select>
                        </div>
                        {pages && type?.length > 0 ? (
                          <>
                            <div
                              style={{
                                width: "100%",
                                textAlign: "center",
                                marginTop: 15
                              }}
                            >
                              <StripeCheckout
                                stripeKey="pk_test_IdCqGO7sona7aWZqqiXTs3MN00vl1vkEQa"
                                token={handleToken}
                                amount={printcost * 100}
                                email={userInfo?.email}
                              ></StripeCheckout>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyDocumentView;
