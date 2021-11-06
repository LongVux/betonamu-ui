import { Level } from "./enum";

export interface Article {
  id: string;
  backgroundImg: string | null;
  title: string;
  tag: string[];
  level: Level
  description: string;
}

export interface Author {
  id: string;
  nickname: string;
  email: string;
  credit: number;
  contributionLevel: number;
}

export interface ArticleDetail {
  id: string;
  article: Article;
  author: Author;
  content: string;
}