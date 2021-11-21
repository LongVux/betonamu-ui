import { Alert, Button } from "antd";
import React, { useState } from "react";
import "./QuestionCard.scss";

type QuestionCardProps = {
  editable: boolean,
}

export default function QuestionCard() {
  const correctIndex = 3;
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
        <h4>This is Card Header</h4>
      </div>
      <div className="questionContainer">
        <div className="questionContent">
          This is a question that is about japanese learning. If you know the
          answer then try! This is a question that is about japanese learning.
          If you know the answer then try! This is a question that is about
          japanese learning. If you know the answer then try! This is a question
          that is about japanese learning. If you know the answer then try!
        </div>
      </div>
      <div className="answersContainer">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              className={getAnswerClassName(index)}
              onClick={() => editable && setCurrentChosenAnswerIndex(index)}
            >
              <div className="answerContent">{`This is answer ${index + 1
                }`}</div>
            </div>
          ))}
      </div>

      <div className="cardFooter">
        <Button type="primary" onClick={handleViewExplain}>
          Details
        </Button>
        <Alert
          className={showExplanation ? "" : "hidden"}
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"
        />
      </div>
    </div>
  );
}
