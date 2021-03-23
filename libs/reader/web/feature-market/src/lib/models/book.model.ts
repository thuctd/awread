import { Category } from ".";

export interface Book {
  id: string;
  authorId: string;
  title: string;
  categories: Category[];
}

export function Book(params: Partial<Book>) {
  return {

  } as Book;
}
