enum BookStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  PENDING = 'PENDING',
}

export interface Book {
  bookid: string;
  userid: string;
  title: string;
  img: string;
  description: string;
  completed: boolean;
  status: BookStatus;
  isdeleted: boolean;
  tags: string[];
  createdat: Date;
  publishedat: Date;
  updatedat: Date;
}

export function Book(params: Partial<Book>) {
  return {} as Book;
}
