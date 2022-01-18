import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageSelector from "../components/ImageSelector";
import { updateUserInfoAction } from "../actions/userActions";
import Toasty from "../utils/toast";

const Profile = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [image, setimage] = useState("");
  const [email, setemail] = useState("");

  const [is_edit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      setfirstName(userInfo?.firstName);
      setlastName(userInfo?.lastName);
      setemail(userInfo?.email);
      setimage(userInfo?.userImage);
    }
  }, [userInfo]);

  const updateProfileData = async (e) => {
    const formData = new FormData();

    formData.append("user_image", image);
    formData.append("id", userInfo?._id);
    formData.append("lastName", lastName);
    formData.append("firstName", firstName);

    await dispatch(updateUserInfoAction(formData));
    setIsEdit(false);
  };
  return (
    <section className="board">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Link to="/Dashboard">
              <i className="fas fa-chevron-left arow-l" />
            </Link>
            <h4 className="for-head-h4">My Profile</h4>
          </div>
        </div>
        <div className="card wap2">
          <div className="col-lg-12">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <ImageSelector
                setImage={setimage}
                image={image}
                is_edit={is_edit}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-3 order-sm-1"></div>
            <div className="col-12 col-xl-6 order-sm-2 ">
              <div className="row text-center">
                {!is_edit ? (
                  <>
                    <div className="col-md-6 col-12">
                      <p className="py-2">First Name</p>
                    </div>
                    <div className="col-md-6 col-12">
                      <p className="py-2">{userInfo?.firstName}</p>
                    </div>
                    <div className="col-md-6 col-12">
                      <p className="py-2">Last Name</p>
                    </div>
                    <div className="col-md-6 col-12">
                      <p className="py-2">{userInfo?.lastName}</p>
                    </div>
                  </>
                ) : (
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">First Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Enter first Name"
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
                        placeholder="Enter last Name"
                        value={lastName}
                        onChange={(e) => {
                          setlastName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                )}

                <div className="col-md-6 col-12">
                  <p className="py-2">Email Address</p>
                </div>
                <div className="col-md-6 col-12">
                  <p className="py-2">{userInfo?.email}</p>
                </div>
                <div className="col-lg-12 text-center py-2">
                  <Link
                    to="#"
                    className="btn btn-primary blue-btn2"
                    onClick={() => {
                      if (!is_edit) {
                        setIsEdit(true);
                      } else {
                        updateProfileData();
                      }
                    }}
                  >
                    {" "}
                    {is_edit ? "Update" : "Edit"}
                  </Link>
                </div>
                <div className="col-lg-12 text-center py-2">
                  <Link to='/' className="blue-head">
                    Change Password
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-3 order-sm-1 order-xl-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
