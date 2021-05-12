export interface Chapter {
  chapterId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  bookId: string;
  position: string;
  chapterNumber: number;
  content: string;
}

export function Chapter(params: Partial<Chapter>) {
  return {

  } as Chapter;
}
