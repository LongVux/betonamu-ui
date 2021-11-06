import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../../models/article";
import { Test } from "../../models/test";
import "./AppCard.scss";
import image from "./demo-background-image.jpg"

type AppCardProps = {
  dataSource: Article | Test;
  link: string;
}

export default function AppCard (props: AppCardProps) {
  return (
    <Link className="appCard" to={props.link}>
      <div className="cardHeader">
        <img className="cardImg" alt="img" src={image} />
      </div>
      <div className="cardTitle">
        <Typography.Paragraph
          style={{width: "100%"}}
          ellipsis={{rows: 3, tooltip: props.dataSource.title }}
        >
          {props.dataSource.title}
        </Typography.Paragraph>
      </div>
    </Link>
  )
}