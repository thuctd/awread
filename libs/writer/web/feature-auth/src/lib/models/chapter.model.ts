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

export function createChapterObject(params: Partial<Chapter>) {
  return {
    chapterid: params.chapterid,
    bookid: params.bookid,
    content: params.content ?? '',
    title: params.title ?? '',
    status: params.status ?? 'DRAFT',
    createdat: params.createdat ?? new Date(),
    updatedat: params.updatedat ?? new Date(),
    publishedat: params.publishedat ?? new Date(),
    chapterNumber: params.chapterNumber ?? 0,
  } as Chapter;
}
