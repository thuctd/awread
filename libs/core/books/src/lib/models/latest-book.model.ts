import { newestChapters } from './newestChapters.model';
import { Category } from 'libs/core/categories/src/lib/models/category.model';

export interface LatestBook {
  bookId: string;
  categoryId: Category['categoryId'];
  title: string;
  newestChapters: newestChapters[];
  updatedAt: Date;
  views: number
}

export function LatestBook(params: Partial<LatestBook>) {
  return {

  } as LatestBook;
}
