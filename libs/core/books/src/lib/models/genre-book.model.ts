import { Genre } from "libs/core/genres/src/lib/models/genre.model";
export interface GenreBook {
  bookId: string;
  cover: string;
  genreIds: Genre[];
  title: string;
  userId: string;
}

export function GenreBook(params: Partial<GenreBook>) {
  return {

  } as GenreBook;
}
