import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import AppTab from "../../components/AppTab/AppTab";
import PageHeader from "../../components/PageHeader/PageHeader";
import Carousel from "./Carousel";
import image from "./homepage-background.jpg"
import AppCard from "../../components/AppCard/AppCard";
import { articleListMock } from "../../__mocks__/articleMork";
import { Article } from "../../models/response/article";
import { getAllArticles } from "../../service/article.service";

const { Content } = Layout;

export default function HomePage() {

  const [articles, setArticles] = useState([] as Article[])

  useEffect(() => {
    const getArticle = async () => {
      const response = await getAllArticles()
      console.log(response.data)

      setArticles(response.data)
    }

    getArticle()
  }, [])

  console.log("reload")

  return (
    <Layout>
      <PageHeader
        title="BETONAMU"
        description="A web helping you with japanese learning."
        backgroundImage={image}
      />
      <Content>
        <Carousel />
        { articles.length > 0 && <AppTab
          title="Top view"
          pageLimit={5}
          dataSource={articles.map((article, index) => {
            return <AppCard
              key={index}
              title={article.title}
              tag={article.tag}
              level={article.level} 
              link={`/article/${article.id}`}/>
          })
          }
        />}
      </Content>
    </Layout>
  )
}