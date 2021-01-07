enum ChapterStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  PENDING = 'PENDING',
}
export interface Chapter {
  chapterid: string;
  bookid: string;
  content: string;
  title: string;
  status: ChapterStatus;
  createdat: Date;
  updatedat: Date;
  publishedat: Date;
  chapterNumber: number;
}

export function Chapter(params: Partial<Chapter>) {
  return {} as Chapter;
}
