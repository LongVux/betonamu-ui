import React from "react";
import { Layout } from "antd";
import AppTab from "../../components/AppTab/AppTab";
import PageHeader from "../../components/PageHeader/PageHeader";
import Carousel from "./Carousel";
import image from "./homepage-background.jpg"
import AppCard from "../../components/AppCard/AppCard";
import { articleListMock } from "../../__mocks__/articleMork";
import { testListMock } from "../../__mocks__/testMock";

const { Content } = Layout;

export default function HomePage() {

  console.log(articleListMock)
  console.log(testListMock)

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
          pageLimit={5}
          dataSource={articleListMock.map((article, index) => {
            return <AppCard
              key={index}
              dataSource={article} 
              link={`/article/${article.id}`}/>
          })
          }
        />
      </Content>
    </Layout>
  )
}