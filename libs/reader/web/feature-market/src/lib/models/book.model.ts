import { Category } from ".";

export interface Book {
  id: string;
  imgUrl: string;
  authorId: string;
  title: string;
  categories: Category['id'];
}

export function Book(params: Partial<Book>) {
  return {

  } as Book;
}
