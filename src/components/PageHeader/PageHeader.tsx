import React from "react";
import "./PageHeader.scss"

type PageHeaderProps = {
  backgroundImage?: string;
  title: string;
  description?: string;
}

export default function PageHeader (props: PageHeaderProps) {

  return (
    <div className="pageHeader">
      <div className="mainContent">
        {props.backgroundImage? 
          <img src={props.backgroundImage} className="backgroundImage" alt={props.title}/> :
          <div className="backgroundImage noImg" />}
        <h1 className="title">{props.title}</h1>
      </div>
      <div className="description">
        <h3>{props.description}</h3>
      </div>
    </div>
  )
}