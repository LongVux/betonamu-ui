import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import PageHeader from "../../components/PageHeader/PageHeader";
import GeneralLayout from "../../layouts/generalLayout/GeneralLayout";
import { Article } from "../../models/response/article";
import postList from "../../posts.json";
import "./ArticlePage.scss";

export default function ArticlePage() {
  
  const params = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState<Article>({
    id: 0,
    description: "default_description",
    date: "default_date",
    level: "default_level",
    tag: ["default_tag"],
    title: "default_title",
    pictureSource: "default_source",
    author: "default_author",
    content: "default_content"
  })

  const date = new Date(String(post?.date).trim())

  useEffect(() => {
    if (!isNaN(Number(params.id)) && postList[Number(params.id)] !== undefined) {
      console.log(postList[Number(params.id)])
      setPost(postList[Number(params.id)])
    }
    setLoading(false)
  }, [params.id])

  if (loading) {
    return <GeneralLayout
      header={<Spin />}
    >
    </GeneralLayout>
  } else if (post?.title === "default_title") {
    return <GeneralLayout
    header={<PageHeader
      title={"No article with given url!"}
      description={"Maybe there is something wrong, it will be fix soon! Sorry..."}
    />}
  >
  </GeneralLayout>
  }

  return (
    <GeneralLayout
      header={<PageHeader
        title={post.title}
        description={post.description}
      />}
      metaData={
        <>
          <div>{post.author}</div>
          <div>{date.toLocaleString()}</div>
          <div>{post.level}</div>
        </>
      }
    > 
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="article-page-content">{post.content}</ReactMarkdown>
    </GeneralLayout>
  )
}