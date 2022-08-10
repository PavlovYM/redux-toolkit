export interface IPost {
  id: number,
  title: string,
  body: string,
  date: string,
  userId?: number | undefined | null;
}

