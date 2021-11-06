import React from "react";
import { Carousel as AntCarousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Carousel.scss"

export default function Carousel() {
  return (
    <div className="carouselContainer">
      <AntCarousel
        autoplay
        arrows 
        prevArrow={<LeftOutlined />} 
        nextArrow={<RightOutlined />}
        className="carousel"
      >
        <div className="slide">
          <h2>Learn Japanese through Articles!</h2>
        </div>
        <div className="slide">
          <h2>Practice Japanese with Reading & Listening Test!</h2>
        </div>
        <div className="slide">
          <h2>Find the Japanese Material with every Level!</h2>
        </div>
        <div className="slide">
          <h2>Contribute and Earn Credit & MONEY!</h2>
        </div>
      </AntCarousel>
    </div>

  )
}