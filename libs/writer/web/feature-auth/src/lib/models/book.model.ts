import { Category } from './category.model';

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
  categoryid: Category['categoryid'];
  completed: boolean;
  status: BookStatus;
  isdeleted: boolean;
  tags: string[];
  createdat: Date;
  publishedat: Date;
  updatedat: Date;
  categoryname: string;
  totalChapterCount: number;
  totalChapterCountPublished: number;
}

export function createBookObject(params: Partial<Book>) {
  return {
    bookid: params.bookid,
    userid: params.userid,
    title: params.title ?? '',
    img: params.img ?? '',
    description: params.description ?? '',
    completed: params.completed ?? '',
    status: params.status ?? 'DRAFT',
    isdeleted: params.isdeleted ?? false,
    tags: params.tags ?? '',
    createdat: params.createdat ?? new Date(),
    publishedat: params.publishedat ?? new Date(),
    updatedat: params.updatedat ?? new Date(),
    categoryname: params.categoryname ?? '',
    totalChapterCount: params.totalChapterCount ?? 0,
    totalChapterCountPublished: params.totalChapterCountPublished ?? 0,
  } as Book;
}
