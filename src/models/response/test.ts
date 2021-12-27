export type Answer = {
  id: number,
  answerName: string,
  answerContent: string,
}

export type Question = {
  id: number,
  questionNumber: number,
  correctAnswerName: string,
  questionContent: string,
  explaination: string,
  answerList: Answer[],
}

export type Test = {
  id: number,
  testType: string,
  testName: string,
  questionList: Question[],
}