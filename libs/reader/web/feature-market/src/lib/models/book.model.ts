export interface Book {
  id: string;
  imgUrl: string;
  authorId: string;
  title: string;
  category: string;
  genres: string[];
}

export function Book(params: Partial<Book>) {
  return {

  } as Book;
}
