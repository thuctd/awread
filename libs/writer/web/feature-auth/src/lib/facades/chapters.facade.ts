import { Injectable } from '@angular/core';
import { ChaptersGear } from '../gears/chapters.gear';

@Injectable({ providedIn: 'root' })
export class ChaptersFacade {
  constructor(private chaptersGear: ChaptersGear) {}

  getChapterDetail(chapterid: string, bookid: string) {
    return this.chaptersGear.getChapterDetail(chapterid, bookid);
  }

  createChapter(chapter) {
    return this.chaptersGear.createChapter(chapter);
  }

  updateChapter(chapter) {
    return this.chaptersGear.updateChapter(chapter);
  }

  removeChapter(chapterid: string) {
    return this.chaptersGear.removeChapter(chapterid);
  }
}
