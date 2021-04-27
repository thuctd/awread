import { Category } from "./category.model";
import { Genre } from "./genre.model";

export interface Book {
  bookId: string
  cover: string;
  authorId: string;
  title: string;
  category: string;
  bookid: string;
  userid: string;
  description: string;
  categoryid: Category['categoryid'];
  completed: boolean;
  isdeleted: boolean;
  tags: string[];
  audience: string;
  genreIds: string[];
  updatedat: Date;
  genres?: Genre[];
  totalChapterCount: number;
  totalChapterCountPublished: number;
}

export function Book(params: Partial<Book>) {
  return {

  } as Book;
}
