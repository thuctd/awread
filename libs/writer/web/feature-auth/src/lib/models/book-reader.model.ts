export interface BookReader {
  bookid: string;
  userid: string;
  title: string;
  img: string;
  description: string;
  categoryid: string;
}

export function BookReader(params: Partial<BookReader>) {
  return {} as BookReader;
}
