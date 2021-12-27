import { Alert, Button, Form, FormInstance } from "antd";
import React, { useEffect, useState } from "react";
import { AnswerEnum } from "../../models/enum";
import { Question } from "../../models/response/test";
import "./QuestionCard.scss";

type QuestionCardProps = {
  editable: boolean,
  question: Question,
  questionIndex: number,
  form: FormInstance<any>,
}

export default function QuestionCard(props: QuestionCardProps) {
  const correctIndex = AnswerEnum[`${props.question.correctAnswerName}`];
  const [currentChosenAnswerIndex, setCurrentChosenAnswerIndex] = useState(-1);
  const [showExplanation, setExplanation] = useState(false);

  useEffect(() => {
    let answer: any = {}

    const letters = ["A", "B", "C", "D"];
    answer[`${props.question.id}`] = letters[currentChosenAnswerIndex]

    props.form.setFieldsValue({
      ...answer
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChosenAnswerIndex])

  const handleViewExplain = () => {
    setExplanation(true);
  }

  const getAnswerClassName = (answerIndex: number) => {
    let className = "answer";

    if (props.editable) {
      if (answerIndex === currentChosenAnswerIndex) {
        className = "chosenAnswer";
      }
    } else {
      if (correctIndex === answerIndex) {
        className = "correctAnswer";
      }
      if (answerIndex === currentChosenAnswerIndex &&
        correctIndex === currentChosenAnswerIndex) {
        className = "rightAnswer";
      }
      if (answerIndex === currentChosenAnswerIndex &&
        correctIndex !== currentChosenAnswerIndex) {
        className = "wrongAnswer";
      }
    }

    return className;
  }

  return (
    <div className="questionCard">
      <div className="cardHeader">
        <h4>Question number {props.questionIndex}</h4>
      </div>
      <div className="questionContainer">
        <div className="questionContent">
          {props.question.questionContent}
        </div>
      </div>
      <Form.Item 
        name={props.question.id}
        hidden
      />
      <div className="answersContainer">
        {props.question.answerList
          .map((answer, index) => (
            <div
              className={getAnswerClassName(index)}
              onClick={() => props.editable && setCurrentChosenAnswerIndex(index)}
            >
              <div className="answerContent">{answer.answerName}. {answer.answerContent}</div>
            </div>
          ))}
      </div>

      {!props.editable &&
        <div className="cardFooter">
          <Button type="primary" onClick={handleViewExplain}>
            Details
          </Button>
          <Alert
            className={showExplanation ? "" : "hidden"}
            message="Explanation"
            description={props.question.explaination}
            type="info"
          />
        </div>}
    </div>
  );
}
