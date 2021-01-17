import { Router } from '@angular/router';
import { BooksFacade } from './books.facade';
import { Injectable } from '@angular/core';
import { ChaptersGear, FirestoreGear } from '../gears';
import { ChaptersQuery, ChaptersStore } from '../states/chapters';
import {
  ChapterDetailStore,
  ChapterDetailQuery,
} from '../states/chapter-detail';

@Injectable({ providedIn: 'root' })
export class ChaptersFacade {
  chapterListByBookId$ = this.chaptersQuery.chapterList$;
  constructor(
    private chaptersGear: ChaptersGear,
    private booksFacade: BooksFacade,
    private router: Router,
    private chaptersStore: ChaptersStore,
    private chapterDetailStore: ChapterDetailStore,
    private chapterDetailQuery: ChapterDetailQuery,
    private chaptersQuery: ChaptersQuery,
    private firestoreGear: FirestoreGear
  ) {}

  getChapterCountAkita() {
    return this.chaptersQuery.getCount();
  }

  getAllAkita() {
    return this.chaptersQuery.getAll();
  }

  createChapterInAkita(chapterid: string, chapter) {
    this.chaptersStore.add(chapter);
  }

  deleteChapterInAkita(chapterid: string) {}

  updateChapterInAkita(chapterid: string, chapter) {
    return this.chaptersStore.updateChapterById(chapterid, chapter);
  }

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
  createChapter(chapter) {
    return this.chaptersGear.createChapter(chapter).pipe();
  }
  updateChapter(chapter) {
    return this.chaptersGear.updateChapter(chapter).pipe();
  }
  removeChapter(chapterid: string, bookId: string, status: string) {
    return this.chaptersGear.removeChapter(chapterid, bookId, status).pipe();
  }
}
