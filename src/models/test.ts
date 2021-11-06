import { Level, TestType } from "./enum";

export interface ListeningSource {
  audioSource: string
}

export interface ReadingSource {
  textSource: string
}

export interface Answer {
  id: string;
  answerContent: string
}

export interface Question {
  id: string;
  answer: Answer[]
  correctAnswerId: string;
  questionContent: string;
  explanation: string;
} 

export interface TestDetail {
  test: Test;
  id: string;
  source: ListeningSource | ReadingSource
  questions: Question[]
}

export interface Test {
  testType: TestType;
  id: string;
  title: string;
  tag: string[];
  level: Level;
  description: string;
}

