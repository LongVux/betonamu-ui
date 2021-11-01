import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import "./GeneralLayout.scss";

type GeneralLayoutProps = {
  header?: React.ReactNode;
  metaData?: React.ReactNode;
  children: React.ReactNode;
};

export default function GeneralLayout(props: GeneralLayoutProps) {
  return <Layout className="generalLayout">
    {props.header && props.header}
    <Content className="generalLayoutContent">
      <div className="mainContent">
        {props.children}
      </div>
      <div className="sideContent">
        <h4 className="generalCard">Some further information can be placed here</h4>
      </div>
    </Content>
  </Layout>
}