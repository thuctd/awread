import { map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, Injectable, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { combineLatest, of, Subject } from 'rxjs';
import { CreationsFacade } from '@awread/core/creations';
import { ChaptersFacade } from '@awread/core/chapters';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailTocPage implements OnInit {
  chapters$ = this.chaptersFacade.chapters$;
  book$;
  bookId;
  tabsHead = [
    { name: 'THÔNG TIN TRUYỆN', href: ['../detail'], isActive: false },
    { name: 'MỤC LỤC', href: null, isActive: true },
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private creationsFacade: CreationsFacade,
    private chaptersFacade: ChaptersFacade,
  ) { }

  ngOnInit(): void {
    this.getAllChapters();
  }

  eventChooseImageCover() {

  }


  chapterActionEvent(data: { type: string; chapter: string; }) {
    switch (data.type) {
      case 'create':
        this.createChapter();
        return;
      case 'edit':
        this.editChapter(data);
        return;
      case 'delete':
        this.delete(data.chapter);
        return;
      default:
        this.creationsFacade.creationsRoutingGear.list();
        return;
    }
  }

  private createChapter() {
    const position = this.chaptersFacade.getLatestPosition();
    this.creationsFacade.creationsRoutingGear.createChapter(this.bookId, position);
  }

  private getAllChapters() {
    return this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          this.bookId = params.get('bookId');
          if (this.bookId) {
            this.book$ = this.creationsFacade.selectEntity(this.bookId).pipe(
              map(fullBook => fullBook.book),
            );
            return this.chaptersFacade.getAllChapters(this.bookId);
          }
          return of([]);
        })
      )
      .subscribe((res) => {
        // console.log('all chapters res: ', res);
      });
  }

  private editChapter(chapter) {
    this.creationsFacade.creationsRoutingGear.editChapter(chapter);
  }

  private delete(chapter) {
    this.chaptersFacade.delete(chapter.chapterId).subscribe(v => console.log('delete ', v))
  }
}
