import { filter } from '@angular-devkit/schematics';
import { tap, retry, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { of } from 'rxjs';
import db from './db.json';

@Injectable({ providedIn: 'root' })
export class ChaptersApi {
  constructor(private apollo: Apollo) { }

  getAllChapters(bookId) {
    return of(db.chapters.filter(chapter => chapter.bookId === bookId))
      .pipe(delay(500));

  }

  getChapterDetail(bookId: string, chapterId: string) {
    return of(db.chapters.find(chapter => chapter.id === chapterId && chapter.bookId === bookId))
      .pipe(delay(500));
  }
}
