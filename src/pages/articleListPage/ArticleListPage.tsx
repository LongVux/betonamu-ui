import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";
import AppTab from "../../components/AppTab/AppTab";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Article } from "../../models/response/article";
import { getAllArticles } from "../../service/article.service";
import image from "./background-article.jpg";
import postList from "../../posts.json";

export default function ArticleListPage() {

  const [articles, setArticles] = useState(postList as Article[])

  useEffect(() => {
    const getArticle = async () => {
      const response = getAllArticles()
      setArticles(response)
    }

    getArticle()
  }, [])

  return (
    <Layout>
      <PageHeader
        title="Articles"
        description="To learn is to read a lot! Let's read!"
        backgroundImage={image}
      />
      <Content>
        {
          articles.length > 0 &&
          <AppTab
            title="About Culture"
            pageLimit={5}
            dataSource={articles.map((article, index) => {
              return <AppCard
                key={index}
                title={article.title}
                tag={article.tag}
                level={article.level}
                link={`/article/${article.id}`} />
            })
            }
          />}
      </Content>
    </Layout>
  )
}