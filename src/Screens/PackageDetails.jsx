import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import { SunspotLoader } from "react-awesome-loaders";

const PackageDetails = ({ match, history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [packagedetails, setpackagedetails] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    handlegetPackageDetails();
  }, []);
  const handlegetPackageDetails = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/subscription/getSingleSubscription/${match?.params?.id}`,
        method: "GET",

        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });
      setpackagedetails(res?.data?.subscription);
      console.log("PackageDetails", res);
    } catch (err) {
      console.log(err);
    }
  };

  async function handleToken(token) {
    console.log("handleToken");
    setloading(true);

    const config = {
      header: {
        Authorization: "Bearer sk_test_OVw01bpmRN2wBK2ggwaPwC5500SKtEYy9V"
      }
    };
    const response = await axios.post(
      `${baseURL}/checkout`,
      { token, product: packagedetails?.amount },
      config
    );
    console.log("response", response);
    const { source } = response.data;

    console.log(
      "res",
      response.data.id,
      response.data.status,
      response.headers.date,
      response.data.receipt_email
    );
    const res = await axios.post(
      `${baseURL}/user/paymentOfSubscription`,
      {
        id: match?.params?.id,
        userid: userInfo?._id,
        subscription: packagedetails
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
        text: "Payment done successfully",
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
                  <Link to="/Packages">
                    <i className="fas fa-chevron-left arow-l" />
                  </Link>
                  <h4 className="for-head-h4">Packages</h4>
                  <p className="text-center">
                    Choose a plan that works best for you!
                  </p>
                </div>
              </div>
              <div className="row py-5">
                <div className="col-lg-5 m-auto">
                  <div className="card work-card2 px-4">
                    <div className="card-body text-center">
                      <h4 className="card-title for-head-h4">
                        {packagedetails?.packagename} Package
                      </h4>
                      <h4 className="card-title blue-head for-head-h4">
                        <sup>$</sup>
                        {packagedetails?.amount}
                      </h4>
                      <div className="media">
                        <img
                          src="assets/images/documents-2.png"
                          className="mr-2"
                          alt="..."
                        />
                        <div className="media-body">
                          <h6 className="mt-0 text-left">
                            {packagedetails?.duration} Days
                          </h6>
                        </div>
                      </div>
                      {packagedetails?.Features?.length > 0 &&
                        packagedetails?.Features?.map((pack) => (
                          <div className="media">
                            <img
                              src="assets/images/documents-2.png"
                              className="mr-2"
                              alt="..."
                            />
                            <div className="media-body">
                              <h6 className="mt-0 text-left">Feature {pack}</h6>
                            </div>
                          </div>
                        ))}
                      <div style={{ height: 20 }}></div>
                      {!loading ? (
                        <StripeCheckout
                          stripeKey="pk_test_IdCqGO7sona7aWZqqiXTs3MN00vl1vkEQa"
                          token={handleToken}
                          amount={packagedetails?.amount * 100}
                          email={userInfo?.email}
                        ></StripeCheckout>
                      ) : (
                        <i className="fas fa-spinner fa-pulse"></i>
                      )}
                      {/* <a href="#" className="blue-btn my-4" data-dismiss="modal" data-toggle="modal" data-target="#packg">Choose
                    Plan</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PackageDetails;
