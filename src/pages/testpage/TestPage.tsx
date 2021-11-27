import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageHeader from "../../components/PageHeader/PageHeader";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import GeneralLayout from "../../layouts/generalLayout/GeneralLayout";
import { Test } from "../../models/response/test";
import { getListeningTest, getReadingTest } from "../../service/test.service";

export default function TestPage() {

  const [test, setTest] = useState(null as unknown as Test);
  const params = useParams<{ testType?: string | undefined; id?: string | undefined; }>();

  useEffect(() => {
    const getTest = async () => {
      let test;

      if (params.testType === "reading") {
        test = await getReadingTest(Number(params.id));
      } else {
        test = await getListeningTest(Number(params.id));
      }

      setTest(test.data);
    }

    getTest();
  }, [])

  return <>
    {
      test &&
      <GeneralLayout
        header={<PageHeader
          title={test.testName}
          description="Challenge yourself! - Sharpen you skills!"
        />}
        metaData={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero nulla, pretium vitae volutpat id, porttitor eget turpis. Suspendisse accumsan neque at tellus malesuada, a vehicula est congue. Sed aliquet volutpat diam, vulputate facilisis felis ornare ac. Sed egestas augue eu dui iaculis vehicula iaculis a arcu."
        }
      >
        {test.questionList.map(
          (question, i) =>
            <QuestionCard 
              editable={true}
              question={question}
              questionIndex={i}
            />
        )
        }

      </GeneralLayout>}
  </>
}