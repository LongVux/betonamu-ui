import React from "react";
import { Layout } from "antd";
import AppTab from "../../components/AppTab/AppTab";
import PageHeader from "../../components/PageHeader/PageHeader";
import Carousel from "./Carousel";
import image from "./homepage-background.jpg"
import AppCard from "../../components/AppCard/AppCard";

const { Content } = Layout;

export default function HomePage () {
  return (
    <Layout>
      <PageHeader 
        title="BETONAMU"
        description="A web helping you with japanese learning."
        backgroundImage={image}
      />
      <Content>
        <Carousel />
        <AppTab
          title="Top view"
        >
          {Array(10).fill(0).map((_, index) => { return <AppCard key={index} /> })
          }
        </AppTab>
      </Content>
    </Layout>
  )
}