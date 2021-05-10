export interface Chapter {
  chapterId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  published: Boolean;
  bookId: string;
  chapterNumber: number;
}

export function Chapter(params: Partial<Chapter>) {
  return {

  } as Chapter;
}
