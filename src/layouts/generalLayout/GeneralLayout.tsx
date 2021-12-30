import { Affix, Layout } from "antd";
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
      {
        props.metaData &&
        <Affix offsetTop={200} className="sideContent">
          <div>
            {props.metaData}
          </div>
        </Affix>

      }
    </Content>
  </Layout>
}