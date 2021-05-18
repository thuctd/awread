import { Book } from '@awread/core/books';

export interface Chapter {
  chapterId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  bookId: string;
  position: string;
  chapterNumber: number;
  content?: string;
  book?: Book;
}

export function Chapter(params: Partial<Chapter>) {
  return {

  } as Chapter;
}
