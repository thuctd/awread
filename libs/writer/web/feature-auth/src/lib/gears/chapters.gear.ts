import { ChaptersApi } from './../apis/chapters.api';
import { Injectable } from '@angular/core';
import { FirebaseFirestoreAddon } from '../addons';

@Injectable({ providedIn: 'root' })
export class ChaptersGear {
  constructor(
    private chaptersApi: ChaptersApi,
    private firebaseFirestoreAddon: FirebaseFirestoreAddon
  ) {}

  getAllChapters(bookid: string) {
    return this.chaptersApi.getAllChapters(bookid);
  }

  getChapterDetail(chapterid: string, bookid: string) {
    return this.chaptersApi.getChapterDetail(chapterid, bookid);
  }

  createChapter(chapter) {
    // const chapterid = this.firebaseFirestoreAddon.createId();
    return this.chaptersApi.createChapter(chapter);
  }

  updateChapter(chapter) {
    return this.chaptersApi.updateChapter(chapter);
  }

  removeChapter(chapterid: string) {
    return this.chaptersApi.removeChapter(chapterid);
  }
}
