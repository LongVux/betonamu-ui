import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import PageHeader from "../../components/PageHeader/PageHeader";
import GeneralLayout from "../../layouts/generalLayout/GeneralLayout";
import postList from "../../posts.json";
import "./ArticlePage.scss";

export default function ArticlePage() {

  return (
    <GeneralLayout
      header={<PageHeader
        title={postList[0].title}
        description={postList[0].description}
      />}
      metaData={
        <>
          <div>{postList[0].author}</div>
          <div>{postList[0].date}</div>
        </>
      }
    > 
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="article-page-content">{postList[0].content}</ReactMarkdown>
    </GeneralLayout>
  )
}