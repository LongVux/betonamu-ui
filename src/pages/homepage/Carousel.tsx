import React from "react";
import { Carousel as AntCarousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Carousel.scss"

const contentStyle : React.CSSProperties = {
  height: '300px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Carousel() {
  return (
    <div className="carouselContainer">
      <AntCarousel
        autoplay
        arrows 
        prevArrow={<LeftOutlined />} 
        nextArrow={<RightOutlined />}
      >
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </AntCarousel>
    </div>

  )
}