import { Alert, Button } from "antd";
import React, { useState } from "react";
import "./QuestionCard.scss";

export default function QuestionCard() {
  const [currentChosenAnswerIndex, setCurrentChosenAnswerIndex] = useState(-1);
  const [editable, setEditable] = useState(false);

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
              className={
                index === currentChosenAnswerIndex ? "chosenAnswer" : "answer"
              }
              onClick={() => editable && setCurrentChosenAnswerIndex(index)}
            >
              <div className="answerContent">{`This is anwser ${
                index + 1
              }`}</div>
            </div>
          ))}
      </div>

      <div className="cardFooter">
        <Button type="primary" onClick={() => setEditable(!editable)}>
          Details
        </Button>
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"
        />
      </div>
    </div>
  );
}
