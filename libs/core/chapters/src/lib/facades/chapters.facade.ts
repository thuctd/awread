import { Injectable } from '@angular/core';
import { Order } from '@datorama/akita';
import { ChaptersGear } from '../gears/chapters.gear';
import { ChaptersQuery } from '../states/chapters';

@Injectable({ providedIn: 'root' })
export class ChaptersFacade {
  chapters$ = this.chaptersQuery.selectAll({ sortBy: 'position', sortByOrder: Order.DESC });
  constructor(
    private chaptersGear: ChaptersGear,
    private chaptersQuery: ChaptersQuery,
  ) { }

  getLatestPosition() {
    return this.chaptersGear.getLatestPosition();
  }

  fetchLatestChapterPosition(bookId) {
    return this.chaptersGear.fetchLatestChapterPosition(bookId);
  }

  getChapter(bookId: string, chapterId: string) {
    return this.chaptersGear.getChapter(bookId, chapterId);
  }

  create(chapter, publishThisChapter, publishThisBook) {
    return this.chaptersGear.create(chapter, publishThisChapter, publishThisBook);
  }

  update(chapter, publishThisBook) {
    return this.chaptersGear.update(chapter, publishThisBook);
  }

  delete(chapterId) {
    return this.chaptersGear.delete(chapterId);
  }

  getAllChapters(bookId: string) {
    return this.chaptersGear.getAllChapters(bookId);
  }

  getChapterDetail(chapterid: string, bookid: string) {
    return this.chaptersGear.getChapterDetail(chapterid, bookid);
  }

  getPageChapter(bookId: string, offset: number) {
    return this.chaptersGear.getPageChapter(bookId, offset);
  }
}
