import { Genre } from './../../../../genres/src/lib/models/genre.model';
import { Category } from './../../../../categories/src/lib/models/category.model';

export interface Book {
  bookId: string
  cover: string;
  authorId: string;
  title: string;
  category: string;
  bookid: string;
  userid: string;
  description: string;
  categoryid: Category['categoryId'];
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
