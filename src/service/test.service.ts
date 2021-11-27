import { Test } from "../models/response/test"
import { axiosClient } from "./api.service"

export const getAllListening = () => {
  return axiosClient.get<Test[]>("/listening-test/get-all")
} 

export const getAllReading = () => {
  return axiosClient.get<Test[]>("/reading-test/get-all")
}

export const getListeningTest = (testId: number) => {
  return axiosClient.get<Test>(`/listening-test/get-by-id/${testId}`);
}

export const getReadingTest = (testId: number) => {
  return axiosClient.get<Test>(`/reading-test/get-by-id/${testId}`);
}

export const getSearchResult = (searchKey: string) => {
  return axiosClient.get(`/find-by-keyword/${searchKey}`);
}