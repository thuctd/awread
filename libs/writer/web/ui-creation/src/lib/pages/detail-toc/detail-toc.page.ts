import { map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { CurrentUserFacade } from '@awread/core/users';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Directive, Injectable, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { combineLatest, of, Subject } from 'rxjs';
import { CreationsFacade } from '@awread/core/creations';
import { ChaptersFacade } from '@awread/core/chapters';
import { CategoriesFacade } from '@awread/core/categories';
import { GenresFacade } from '@awread/core/genres';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailTocPage implements OnInit {
  chapters$ = this.chaptersFacade.chapters$;
  book;
  tabsHead = [
    { name: 'THÔNG TIN TRUYỆN', href: ['../detail'], isActive: false },
    { name: 'MỤC LỤC', href: null, isActive: true },
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private creationsFacade: CreationsFacade,
    private currentUserFacade: CurrentUserFacade,
    private chaptersFacade: ChaptersFacade,
    private categoriesFacade: CategoriesFacade,
    private genresFacade: GenresFacade,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllChapters();
  }

  eventChooseImageCover() {

  }


  chapterActionEvent(data: { type: string; chapterid: string; }) {
    switch (data.type) {
      case 'new':
        this.createChapter();
        return;
      case 'edit':
        this.editChapter(data);
        return;
      case 'delete':
        this.removeChapter(data);
        return;
      default:

        return;
    }
  }

  private createChapter() {
    // this.router.navigate(['list', chapter.bookId, 'toc', chapter.chapterId]);
  }

  private getAllChapters() {
    return this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          const bookId = params.get('bookId');
          if (bookId) {
            return this.chaptersFacade.getAllChapters(bookId);
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

  private removeChapter(chapter) {
    // const status = this.bookForm.get('status').value;
    // this.chaptersFacade
    //   .removeChapter(chapter.chapterid, bookId, status)
    //   .pipe(tap((res) => { }))
    //   .subscribe((res) => {
    //     console.log('remove chapter res: ', res);
    //   });
  }
}
