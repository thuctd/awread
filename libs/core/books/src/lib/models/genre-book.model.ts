import { Book } from "./book.model";

export interface GenreBook {
  bookId: string;
  genreId: string;
  bookByBookId: Book;
}

export function GenreBook(params: Partial<GenreBook>) {
  return {

  } as GenreBook;
}
