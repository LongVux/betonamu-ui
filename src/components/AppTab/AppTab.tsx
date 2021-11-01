import { Input, Pagination } from "antd";
import React from "react";
import "./AppTab.scss";

type AppTabProps = {
  children: React.ReactNode;
  title?: String;
  footer?: React.ReactNode;
  searchable?: boolean;
  onSearch?(value: string): any;
}

export default function AppTab (props: AppTabProps) {
  return (
    <div className="appTab">
      <div className="tabHeader">
        <h2 className="tabTitle">
          {props.title}
        </h2>
        {props.searchable && 
          <Input.Search 
          placeholder="Looking for something?" 
          onSearch={props.onSearch} 
          enterButton
          allowClear
          className="tabSearchInput" />
        }
      </div>
      <div className="tabContent" id="style-5">
        {props.children}  
      </div>
      <div className="tabFooter">
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </div>
  )
}