import { ChapterDetailQuery } from './../states/chapter-detail/chapter-detail.query';
import { ChapterDetailStore } from './../states/chapter-detail/chapter-detail.store';
import { Router } from '@angular/router';
import { tap, catchError, map } from 'rxjs/operators';
import { BooksFacade } from '@awread/writer/web/feature-auth';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ChaptersGear, FirestoreGear } from '../gears';
import { ChaptersQuery, ChaptersStore } from '../states/chapters';

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

  //TODO: facade không xử lý logic code cho phần này vào gear
  getAllChapters(bookid: string) {
    return this.chaptersGear.getAllChapters(bookid).pipe(
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
      })
    );
  }
  //TODO: facade không xử lý logic code, cho phần này vào gear
  getChapterDetail(chapterid: string, bookid: string) {
    return this.chaptersGear.getChapterDetail(chapterid, bookid).pipe(
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
      })
    );
  }
  //TODO: facade không xử lý logic code, cho phần này vào gear
  createChapter(chapter) {
    const chapterid = this.firestoreGear.createId();
    const chapterDetail = { ...chapter, chapterid };
    return this.chaptersGear.createChapter(chapterDetail).pipe(
      tap((res) => {
        console.log('createChapter res: ', res);
        if (res['data'] && res['data']['createChapter']['chapter']) {
          this.chaptersStore.add(chapterDetail, { prepend: true });
        }
        this.router.navigate(['detail', { bookId: chapterDetail.bookid }]);
      }),
      //TODO: không catch error ở đây mà catch ở gear để còn alert hoặc ném toast
      //TODO: return throwError(err) chứ không phải return of (err) mình cần throw ra để xử lý tiếp
      catchError((err) => of(err))
    );
  }
  //TODO: facade không xử lý logic code, cho phần này vào gear
  updateChapter(chapter) {
    return this.chaptersGear.updateChapter(chapter).pipe(
      tap((res) => {
        console.log('updateChapter res: ', res);
        if (res['data']) {
          this.chaptersStore.updateChapterById(chapter.chapterid, chapter);
        }
        this.router.navigate(['detail', { bookId: chapter.bookid }]);
      }),
      //TODO: không catch error ở đây mà catch ở gear để còn alert hoặc ném toast
      //TODO: return throwError(err) chứ không phải return of (err) mình cần throw ra để xử lý tiếp
      catchError((err) => of(err))
    );
  }
  //TODO: facade không xử lý logic code, cho phần này vào gear
  removeChapter(chapterid: string) {
    return this.chaptersGear.removeChapter(chapterid).pipe(
      tap((res) => {
        if (res['data']) {
          this.chaptersStore.remove(chapterid);
        }
      })
    );
  }
}
