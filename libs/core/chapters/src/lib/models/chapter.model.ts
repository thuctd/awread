export interface Chapter {
  chapterId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  published: Date;
  bookId: string;
}

export function Chapter(params: Partial<Chapter>) {
  return {

  } as Chapter;
}
