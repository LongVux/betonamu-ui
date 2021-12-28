import { Test } from "../models/response/test";
import { axiosClient } from "./api.service";
import postList from "../posts.json";

export const getAllListening = () => {
  return axiosClient.get<Test[]>("/listening-test/get-all");
};

export const getAllReading = () => {
  return axiosClient.get<Test[]>("/reading-test/get-all");
};

export const getListeningTest = (testId: number) => {
  return axiosClient.get<Test>(`/listening-test/get-by-id/${testId}`);
};

export const getReadingTest = (testId: number) => {
  return axiosClient.get<Test>(`/reading-test/get-by-id/${testId}`);
};

export const getSearchResult = (searchKey: string) => {
  return axiosClient
    .get(`/find-by-keyword/${searchKey}`)
    .then((value) => {
      value.data[0] = getArticleSearchResult(searchKey);
      return value;
    })
    .catch((e) => ({ data: [getArticleSearchResult(searchKey), [], []] }));
};

export function calcResult(answer: any, test: Test) {
  let totalQuestion = 0;
  let correctQuestion = 0;
  test.questionList.forEach((question) => {
    if (
      answer[question.id] &&
      answer[question.id] === question.correctAnswerName
    ) {
      correctQuestion += 1;
    }
    totalQuestion += 1;
  });

  return {
    totalQuestion: totalQuestion,
    correctQuestion: correctQuestion,
    score: (correctQuestion / totalQuestion) * 100,
  };
}

const getArticleSearchResult = (searchword: string) => {
  
  const keyword = searchword.toLowerCase().trim();
  
  return postList.map((post) => {
    console.log(post)
    if (
      post.author.toLowerCase().includes(keyword) ||
      post.description.toLowerCase().includes(keyword) ||
      post.level.toLowerCase().includes(keyword) ||
      post.tag.join(",").toLowerCase().includes(keyword) ||
      post.title.toLocaleLowerCase().includes(keyword)
    ) {
      return post;
    } 
  }).filter(post => post !== undefined);
};
