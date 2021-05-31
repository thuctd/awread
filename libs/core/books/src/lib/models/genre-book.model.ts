import { Genre } from "@awread/core/genres";
export interface GenreBook {
  bookId: string;
  cover: boolean;
  genreIds: Genre[];
  title: string;
  userId: string;
}

export function GenreBook(params: Partial<GenreBook>) {
  return {

  } as GenreBook;
}
