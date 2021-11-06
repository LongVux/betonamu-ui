import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import AppCard from "../../components/AppCard/AppCard";
import AppTab from "../../components/AppTab/AppTab";
import PageHeader from "../../components/PageHeader/PageHeader";
import { articleListMock } from "../../__mocks__/articleMork";
import image from "./background-article.jpg";

export default function ArticleListPage () {
  return (
    <Layout>
    <PageHeader
      title="Articles"
      description="To learn is to read a lot! Let's read!"
      backgroundImage={image}
    />
    <Content>
      <AppTab
        title="About Culture"
        pageLimit={5}
        dataSource={articleListMock.map((article, index) => {
          return <AppCard
            key={index}
            dataSource={article}
            link={`/article/${article.id}`} />
        })
        }
      />
    </Content>
  </Layout>
  )
}