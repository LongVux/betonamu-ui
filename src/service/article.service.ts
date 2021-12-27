import { Article } from "../models/response/article"
import { axiosClient } from "./api.service"
import postList from "../posts.json";

export const getAllArticles = () => {
  return postList
} 