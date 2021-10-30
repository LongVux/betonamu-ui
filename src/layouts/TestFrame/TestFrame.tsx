import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

type TestFrameProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export default function TestFrame(props: TestFrameProps) {
  return (
    <Layout className="testLayout">
      {props.header && props.header}
      <Content>{props.children}</Content>
      {props.footer && props.footer}
    </Layout>
  );
}
