import { Tag, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../../models/response/article";
import { Test } from "../../models/response/test";
import "./AppCard.scss";
import image from "./demo-background-image.jpg"

type AppCardProps = {
  title: string,
  tag: string[],
  level: string,
  link: string;
}

export default function AppCard(props: AppCardProps) {
  return (
    <Link className="appCard" to={props.link}>
      <div className="cardHeader">
        <img className="cardImg" alt="img" src={image} />
      </div>
      <div className="cardTitle">
        <Typography.Paragraph
          style={{ width: "100%" }}
          ellipsis={{ rows: 3, tooltip: props.title }}
        >
          {props.title}
        </Typography.Paragraph>
      </div>
      <div className="cardFooter">
        {
          props.tag.map(tag => (
            <Tag color="#108ee9">{tag}</Tag>
          ))
        }
        <Tag color="#87d068">{props.level}</Tag>
      </div>
    </Link>
  )
}