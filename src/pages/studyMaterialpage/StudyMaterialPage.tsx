import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";
import AppTab from "../../components/AppTab/AppTab";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Test } from "../../models/response/test";
import { getAllListening, getAllReading } from "../../service/test.service";
import image from "./background-materials.jpg";

export default function StudyMaterialPage() {

  const [listeningTests, setListeningTests] = useState([] as Test[]);
  const [readingTests, setReadingTests] = useState([] as Test[]);

  useEffect(() => {
    const getTwoTypeOfTests = async () => {
      const responseListening = await getAllListening();
      const responseReading = await getAllReading();

      setListeningTests(responseListening.data);
      setReadingTests(responseReading.data)
    }

    getTwoTypeOfTests();
  }, [])

  return (
    <Layout>
      <PageHeader
        title="Study Materials"
        description="Challenge yourself! - Sharpen you skills!"
        backgroundImage={image}
      />
      <Content>
        {
          readingTests.length > 0 &&
          <AppTab
            title="Reading Test"
            pageLimit={5}
            dataSource={readingTests.map((test, index) => {
              return <AppCard
                key={index}
                title={test.testName}
                tag={[test.testType]}
                level={"N5"}
                link={`/studyMaterial/reading/${test.id}`} />
            })
            }
          />}

        {
          listeningTests.length > 0 &&
          <AppTab
            title="Listening Test"
            pageLimit={5}
            dataSource={listeningTests.map((test, index) => {
              return <AppCard
                key={index}
                title={test.testName}
                tag={[test.testType]}
                level={"N5"}
                link={`/studyMaterial/listening/${test.id}`} />
            })
            }
          />}
      </Content>
    </Layout>
  )
}