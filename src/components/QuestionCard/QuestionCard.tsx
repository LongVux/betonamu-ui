import { Alert, Button } from "antd";
import React, { useState } from "react";
import { AnswerEnum } from "../../models/enum";
import { Answer, Question } from "../../models/response/test";
import "./QuestionCard.scss";

type QuestionCardProps = {
  editable: boolean,
  question: Question,
  questionIndex: number
}

export default function QuestionCard(props: QuestionCardProps) {
  const correctIndex = AnswerEnum[`${props.question.correctAnswerName}`];
  const [currentChosenAnswerIndex, setCurrentChosenAnswerIndex] = useState(-1);
  const [editable, setEditable] = useState(true);
  const [showExplanation, setExplanation] = useState(false);

  const handleViewExplain = () => {
    setEditable(false);
    setExplanation(true);
  }

  const getAnswerClassName = (answerIndex: number) => {
    let className = "answer";

    if (editable) {
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
      <div className="answersContainer">
        {props.question.answerList
          .map((answer, index) => (
            <div
              className={getAnswerClassName(index)}
              onClick={() => editable && setCurrentChosenAnswerIndex(index)}
            >
              <div className="answerContent">{answer.answerName}. {answer.answerContent}</div>
            </div>
          ))}
      </div>

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
      </div>
    </div>
  );
}
