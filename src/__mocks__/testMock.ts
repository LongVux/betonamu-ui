import { Level, TestType } from "../models/enum";
import { Answer, Question, Test, TestDetail } from "../models/test";

const generateRandomSubject = (index: number) : string[] => {
  const mod = index%4;
  if (mod === 0) {
    return ["culture", "language", "mystery"]
  } else if (mod === 1) {
    return ["culture", "nature", "travel"]
  } else if (mod === 2) {
    return ["culture", "history"]
  } else {
    return ["history", "kanji"]
  }
}

export const testListMock : Test[] = Array(10).fill(0).map((_, index) => {
  return {
    id: "test" + index,
    title: index + ". Let test the " + index + " problem(s) of Japanese",
    testType: (index % 2) ? TestType.Listening : TestType.Reading,
    level: [`N${Math.floor(Math.random() * 4 + 1)}` as unknown as Level],
    description: "The test is about japanese and some knowledge should be test. Let's try this now!",
    tag: generateRandomSubject(index),
  }
})

export const testDetailMock : TestDetail = {
  id: "testDetail001",
  source: {
    textSource: "This is the source for the test",
  },
  test: testListMock[1],
  questions: Array(15).fill(0).map((_, questionIndex): Question => {
    return {
      id: "question" + questionIndex,
      questionContent: "The question content is here!",
      correctAnswerId: "question" + questionIndex + "answer" + 0,
      explanation: "this is too obvious to explain, you dumb ass!",
      answer: Array(4).fill(0).map((_, answerIndex): Answer => {
        return {
          id: "question" + questionIndex + "answer" + answerIndex,
          answerContent: "question" + questionIndex + "answer" + answerIndex + " is correct, choose me!"
        }
      })
    }
  })
}