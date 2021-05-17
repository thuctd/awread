import { Genre } from '@awread/core/genres';
import { Category } from '@awread/core/categories';

export interface Book {
  bookId: string
  cover: string;
  type: 'collected' | 'composed';
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
}

export function Book(params: Partial<Book>) {
  return {

  } as Book;
}
