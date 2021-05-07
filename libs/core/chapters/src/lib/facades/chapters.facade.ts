import { Injectable } from '@angular/core';
import { ChaptersGear } from '../gears/chapters.gear';
import { ChaptersQuery } from '../states/chapters';

@Injectable({ providedIn: 'root' })
export class ChaptersFacade {
  chapters$ = this.chaptersQuery.select();
  constructor(
    private chaptersGear: ChaptersGear,
    private chaptersQuery: ChaptersQuery,
  ) { }

  getChapterEntityAkita(id: string) {
    return this.chaptersQuery.getEntity(id);
  }

  getChapterCountAkita() {
    return this.chaptersQuery.getCount();
  }

  getAllAkita() {
    return this.chaptersQuery.getAll();
  }

  deleteChapterInAkita(chapterid: string) { }

  selectAllChapterAkita() {
    return this.chaptersQuery.selectAll();
  }
  selectEntityChapterAkita(id: string) {
    return this.chaptersQuery.selectEntity(id);
  }

  getAllChapters(bookid: string) {
    return this.chaptersGear.getAllChapters(bookid);
  }

  getChapterDetail(chapterid: string, bookid: string) {
    return this.chaptersGear.getChapterDetail(chapterid, bookid).pipe();
  }
}
