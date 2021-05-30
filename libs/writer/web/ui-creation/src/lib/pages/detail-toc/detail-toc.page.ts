import { map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { CurrentUserFacade } from '@awread/core/users';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, Injectable, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { combineLatest, of, Subject } from 'rxjs';
import { CreationsFacade } from '@awread/core/creations';
import { ChaptersFacade } from '@awread/core/chapters';
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
    private router: Router,
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

        return;
    }
  }

  private createChapter() {
    const position = this.chaptersFacade.getLatestPosition();
    this.router.navigate(['list', this.bookId, 'toc', 'new', 'writing', { position }]);
  }

  private getAllChapters() {
    return this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          this.bookId = params.get('bookId');
          if (this.bookId) {
            this.book$ = this.creationsFacade.selectEntity(this.bookId);
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
    this.router.navigate(['list', chapter.bookId, 'toc', chapter.chapterId]);
  }

  private delete(chapter) {
    this.chaptersFacade.delete(chapter.chapterId).subscribe(v => console.log('delete ', v))
  }
}
