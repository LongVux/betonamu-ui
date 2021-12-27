import { Article } from "../models/response/article"
import { axiosClient } from "./api.service"

export const getAllArticles = () => {
  return axiosClient.get<Article[]>("/article/get-all")
} 