export interface Book {
  bookid: string;
  title: string;
  description: string;
  status: string;
  isdeleted: boolean;
  completed: boolean;
  tags: string[];
}

export function Book(params: Partial<Book>) {
  return {} as Book;
}
