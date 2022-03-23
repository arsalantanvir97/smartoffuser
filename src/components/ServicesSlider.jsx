import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
          <span
            // className="wow animate__animated animate__fadeInDown"
            // data-wow-duration="1.3s"
            // data-wow-delay="0.7s"
          >
            {pro?.details}
          </span>
        ))}
      </Slider>
    );
  }
}
