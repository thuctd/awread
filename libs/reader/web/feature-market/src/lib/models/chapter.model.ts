export interface Chapter {
  id: string;
  title: string;
  content: string;
  bookId: string;
}

export function Chapter(params: Partial<Chapter>) {
  return {

  } as Chapter;
}
