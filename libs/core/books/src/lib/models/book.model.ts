import { Genre } from '@awread/core/genres';

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
  categoryId: string;
  completed: boolean;
  isdeleted: boolean;
  tags: string[];
  audience: string;
  genreIds: string[];
  published: boolean;
  updatedat: Date;
  genres?: Genre[];
}

export function Book(params: Partial<Book>) {
  return {

  } as Book;
}
