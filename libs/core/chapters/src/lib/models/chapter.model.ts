export interface Chapter {
  chapterId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  published: Date;
}

export function Chapter(params: Partial<Chapter>) {
  return {

  } as Chapter;
}
