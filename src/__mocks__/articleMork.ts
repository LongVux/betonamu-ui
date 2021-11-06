import { Article, ArticleDetail, Author } from "../models/article";
import { Level } from "../models/enum";

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

export const articleListMock : Article[] = Array(11).fill(0).map((_, index) => {
  return {
    id: "article" + index,
    title: index + ". Let discuss the " + index + " problem(s) of Japanese",
    backgroundImg: null,
    level: `N${Math.floor(Math.random() * 4 + 1)}` as unknown as Level,
    description: "The article is about japanese and some knowledge should be learn. Let's read this now!",
    tag: generateRandomSubject(index),
  }
})

export const authorMock : Author = {
  id: "author001",
  nickname: "Eden",
  email: "eden@email.com",
  contributionLevel: 5,
  credit: 50
}

export const articleDetailMock : ArticleDetail = {
  id: "article1234",
  article: articleListMock[0],
  author: authorMock,
  content: "This is the article content that will be in type of .md"
}