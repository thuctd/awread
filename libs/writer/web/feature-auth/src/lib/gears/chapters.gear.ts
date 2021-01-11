// TODO: import  ../model thoi
import { Chapter } from './../models/chapter.model';
import { Router } from '@angular/router';
// TODO: import  ../states/chapers thoi
import { ChaptersStore } from './../states/chapters/chapters.store';
// TODO: import  ../apis thoi
import { ChaptersApi } from './../apis/chapters.api';
import { Injectable } from '@angular/core';
import { FirebaseFirestoreAddon } from '../addons';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BooksStore } from '../states/books';

@Injectable({ providedIn: 'root' })
export class ChaptersGear {
  constructor(
    private chaptersApi: ChaptersApi,
    private firebaseFirestoreAddon: FirebaseFirestoreAddon,
    private chaptersStore: ChaptersStore,
    private booksStore: BooksStore,
    private router: Router
  ) { }

  getAllChapters(bookid: string) {
    return this.chaptersApi.getAllChapters(bookid).pipe(
      tap((res) => {
        if (
          res['data'] &&
          res['data']['allChapters'] &&
          res['data']['allChapters']['nodes'].length
        ) {
          this.chaptersStore.set(res['data']['allChapters']['nodes']);
        } else {
          this.chaptersStore.set([]);
        }
      }),
      catchError((err) => throwError(err))
    );
  }

  getChapterDetail(chapterid: string, bookid: string) {
    return this.chaptersApi.getChapterDetail(chapterid, bookid).pipe(
      map((res) => {
        if (
          res['data'] &&
          res['data']['allChapters'] &&
          res['data']['allChapters']['nodes'].length
        ) {
          const chapter = res['data']['allChapters']['nodes'];
          console.log('chapter: ', chapter);
          // this.chaptersStore.updateChapterById(chapterid, chapter[0]);
          return chapter;
        }
        return [];
      }),
      catchError((err) => throwError(err))
    );
  }

  createChapter(chapter: Chapter) {
    const chapterid = this.firebaseFirestoreAddon.createId();
    const chapterDetail = { ...chapter, chapterid };
    return this.chaptersApi.createChapter(chapterDetail).pipe(
      tap((res) => {
        console.log('createChapter res: ', res);
        if (res['data'] && res['data']['createChapter']['chapter']) {
          const isPublished = chapter.status === 'PUBLISHED';
          this.chaptersStore.add(chapterDetail, { prepend: true });
          this.booksStore.updateTotalChapterCount(chapter.bookid, isPublished);
        }
        this.router.navigate(['detail', { bookId: chapterDetail.bookid }]);
      }),
      catchError((err) => throwError(err))
    );
  }

  updateChapter(chapter) {
    return this.chaptersApi.updateChapter(chapter).pipe(
      tap((res) => {
        console.log('updateChapter res: ', res);
        if (res['data']) {
          this.chaptersStore.updateChapterById(chapter.chapterid, chapter);
        }
        this.router.navigate(['detail', { bookId: chapter.bookid }]);
      }),
      catchError((err) => throwError(err))
    );
  }

  removeChapter(chapterid: string) {
    return this.chaptersApi.removeChapter(chapterid).pipe(
      tap((res) => {
        if (res['data']) {
          this.chaptersStore.remove(chapterid);
        }
      }),
      catchError((err) => throwError(err))
    );
  }
}
