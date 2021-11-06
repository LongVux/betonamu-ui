import { Input, Pagination } from "antd";
import React, { useState } from "react";
import "./AppTab.scss";

type AppTabProps = {
  dataSource: React.ReactNode[];
  pageLimit?: number;
  title?: String;
  footer?: React.ReactNode;
  searchable?: boolean;
  onSearch?(value: string): any;
}

export default function AppTab (props: AppTabProps) {

  const offset: number = props.pageLimit || props.dataSource.length

  const [data, setData] = useState(props.dataSource.slice(0, offset))

  const handleChangePage = (page: number) => {
    setData(props.dataSource.slice((page - 1)*offset, page*offset))
  }

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
        {data}
      </div>
      <div className="tabFooter">
        <Pagination 
          defaultCurrent={1}
          pageSize={offset} 
          total={props.dataSource.length}
          size="small"
          onChange={handleChangePage} />
      </div>
    </div>
  )
}