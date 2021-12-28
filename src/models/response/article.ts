export type Article = {
  id: number,
  title: string,
  tag: string[],
  level: string,
  description: string,
  pictureSource?: string,
  date: string,
  author: string,
  content: string
}