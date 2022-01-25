import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { baseURL } from "../utils/api";
import { Link } from "react-router-dom";

const Packages = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [packages, setpackages] = useState([]);
  useEffect(() => {
    onSubmitHandler();
  }, []);
  const onSubmitHandler = async () => {
    try {
      const res = await axios.get(
        `${baseURL}/subscription/allsubscription`,

        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        }
      );
      if (res?.status == 201) {
        console.log("res", res?.data);
        setpackages(res?.data?.getAllSubscriptions);
      }
    } catch (error) {}
  };
  return (
    <section className="board">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Link to="/Dashboard">
              <i className="fas fa-chevron-left arow-l" />
            </Link>
            <h4 className="for-head-h4">Packages</h4>
            <p className="text-center">
              Choose a plan that works best for you!
            </p>
          </div>
        </div>
        <div className="row py-5">
          {packages?.length > 0 &&
            packages?.map((pack) => (
              <div className="col-lg-3">
                <div className="card work-card2">
                  <div className="card-body text-center">
                    <h4 className="card-title for-head-h4">{pack?.packagename}</h4>
                    <h4 className="card-title blue-head for-head-h4">
                      <sup>$</sup>{pack?.amount}
                    </h4>
                    <div className="media">
                      <img
                        src="assets/images/documents-2.png"
                        className="mr-2"
                        alt="..."
                      />
                      <div className="media-body">
                        <h6 className="mt-0 text-left">{pack?.duration} Days</h6>
                      </div>
                    </div>
                    <div className="media">
                      <img
                        src="assets/images/documents-2.png"
                        className="mr-2"
                        alt="..."
                      />
                      <div className="media-body">
                        {pack?.Features?.length>0 && pack?.Features?.map(feat=>(
                        <h6 className="mt-0 text-left">Feature {feat}</h6>
                        ))}
                      </div>
                    </div>
                    <Link to={`/PackageDetails${pack?._id}`} className="blue-btn my-4">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
