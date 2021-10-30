import { Typography } from "antd";
import React from "react";
import "./AppCard.scss";
import image from "./demo-background-image.jpg"

const title = "Henlo, this is a very long title that may break the responsiveness of the page header. Henlo, this is a very long title that may break the responsiveness of the page header."

export default function AppCard () {
  return (
    <div className="appCard">
      <div className="cardHeader">
        <img className="cardImg" alt="img" src={image} />
      </div>
      <div className="cardTitle">
        <Typography.Paragraph
          style={{width: "100%"}}
          ellipsis={{rows: 3, tooltip: title }}
        >
          {title}
        </Typography.Paragraph>
      </div>
    </div>
  )
}