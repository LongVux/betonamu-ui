import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import GeneralLayout from "../../layouts/generalLayout/GeneralLayout";
import postList from "../../posts.json";

export default function ArticlePage() {
  return (
    <GeneralLayout
      header={<PageHeader
        title={postList[0].title}
        description="Please enjoy the reading!"
      />}
      metaData={
        postList[0].author
      }
    >
      {postList[0].content}
    </GeneralLayout>
  )
}