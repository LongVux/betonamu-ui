import { Button, Form, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageHeader from "../../components/PageHeader/PageHeader";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import GeneralLayout from "../../layouts/generalLayout/GeneralLayout";
import { Test } from "../../models/response/test";
import { calcResult, getListeningTest, getReadingTest } from "../../service/test.service";
import "./TestPage.scss";

export default function TestPage() {

  const [test, setTest] = useState(null as unknown as Test);
  const [editable, setEditable] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [result, setResult] = useState(null as any)
  const [form] = useForm();
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

  const onFinish = (value: any) => {
    console.log(value)
    const result = calcResult(value, test)
    console.log(result)
    setResult(result)
    setEditable(false);
    setOpenModal(true);
  }

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
        <Form
          onFinish={onFinish}
          form={form}
          className="test-form"
        >
          {test.questionList.map(
            (question, i) =>
              <QuestionCard
                editable={editable}
                question={question}
                questionIndex={i}
                form={form}
              />
          )
          }
          {editable && <Form.Item className="submit-area">
            <Button
              size="large"
              type="primary"
              htmlType="submit"
            >
              Done
            </Button>
          </Form.Item>}
        </Form>

      </GeneralLayout>}

    {
      result &&
      <Modal
        title="Your result"
        visible={openModal}
        footer={
          <Button onClick={() => setOpenModal(false)}>Ok!</Button>
        }
        closable={false}
        style={
          {
            textAlign: "center"
          }
        }
      >
        <h1>{result.score}</h1>
        <h3>{result.correctQuestion}/{result.totalQuestion}</h3>
      </Modal>}
  </>
}