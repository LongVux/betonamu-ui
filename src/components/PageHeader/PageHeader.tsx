import React from "react";
import "./PageHeader.scss"
import image from "./demo-background-image.jpg"
import { Typography } from "antd";

type PageHeaderProps = {
  backgroundImage?: string;
  title: string;
  description?: string;
}

const mockProps : PageHeaderProps = {
  backgroundImage: image,
  title: "Henlo, this is a very long title that may break the responsiveness of the page header.",
  description: "Henlo, this is a very long title that may break the responsiveness of the page header. Henlo, this is a very long title that may break the responsiveness of the page header."
}

export default function PageHeader () {

  const props = mockProps

  return (
    <div className="pageHeader">
      <div className="mainContent">
        {props.backgroundImage? 
          <img src={props.backgroundImage} className="backgroundImage" alt={props.title}/> :
          <div className="backgroundImage noImg" />}
        <Typography.Title className="title">{props.title}</Typography.Title>
      </div>
      <div className="description">
        <Typography.Title level={4} italic type="secondary">{props.description}</Typography.Title>
      </div>
    </div>
  )
}