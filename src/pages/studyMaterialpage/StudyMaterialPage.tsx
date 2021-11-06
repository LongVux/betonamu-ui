import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import AppCard from "../../components/AppCard/AppCard";
import AppTab from "../../components/AppTab/AppTab";
import PageHeader from "../../components/PageHeader/PageHeader";
import { testListMock } from "../../__mocks__/testMock";
import image from "./background-materials.jpg";

export default function StudyMaterialPage() {
  return (
    <Layout>
      <PageHeader
        title="Study Materials"
        description="Challenge yourself! - Sharpen you skills!"
        backgroundImage={image}
      />
      <Content>
        <AppTab
          title="Reading Test"
          pageLimit={5}
          dataSource={testListMock.map((test, index) => {
            return <AppCard
              key={index}
              dataSource={test}
              link={`/studyMaterial/${test.id}`} />
          })
          }
        />
      </Content>
    </Layout>
  )
}