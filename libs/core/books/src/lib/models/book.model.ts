import { Genre } from '@awread/core/genres';
import { Category } from '@awread/core/categories';

export interface Book {
  bookId: string
  cover: string;
  authorId: string;
  title: string;
  category: string;
  bookid: string;
  userid: string;
  description: string;
  categoryId: Category['categoryId'];
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
