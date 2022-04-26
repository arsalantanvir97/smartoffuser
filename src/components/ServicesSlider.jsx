import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageURL } from "../utils/api";
// import { imageURL } from "../utils/api";
// import UnauthorizedAlert from "./UnauthorizedAlert";

export default class ServicesSlider extends Component {
  render() {
    console.log("this.props", this.props);
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {this?.props?.services?.map((pro) => (
          <>
            <p
              style={{ marginBottom: 10 }}
              // className={
              //   subs?.status == "Active"
              //     ? "black-20 txt-green2"
              //     : "black-20 txt-red2"
              // }
            >
              {pro?.details}
            </p>

            <span className="">
              <img
                style={{ width: "100%", height: "100%" }}
                src={
                  pro?.image && pro?.image !== null
                    ? `${imageURL}${pro?.image}`
                    : "images/user-image.png"
                }
                alt="avatar"
              />
            </span>
          </>
        ))}
      </Slider>
    );
  }
}
