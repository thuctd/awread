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
export class DetailTocPage implements OnInit, OnDestroy {
  bookForm: FormGroup;
  bookId: string;
  chapterEntity$: any;
  chapters$ = this.chaptersFacade.chapters$;

  selectedTab = 'toc';
  selectedBookStatus = 'DRAFT';
  genresListSelected = [];
  categories$;
  genres$;
  bookFormValueBefore = ''; // dùng để check xem giá trị trước với giá trị bookform hiện tại có khớp nhau hay ko?
  type: string;
  submitted = false;
  destroy$ = new Subject();
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private creationsFacade: CreationsFacade,
    private currentUserFacade: CurrentUserFacade,
    private chaptersFacade: ChaptersFacade,
    private categoriesFacade: CategoriesFacade,
    private genresFacade: GenresFacade,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  get f() {
    return this.bookForm.controls;
  }

  ngOnInit(): void {
    // this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.checkActiveTab();
    this.getAllChapters();
    this.initForm();
    this.updateForm();
    this.categories$ = this.categoriesFacade.selectAllCategoriesAkita();
    this.genres$ = this.genresFacade.selectAllGenresAkita();
  }

  createNewChapterEvent() {
    this.router.navigate([
      'writing',
      {
        bookId: this.bookId,
        chapterNumber: this.chaptersFacade.getChapterCountAkita() + 1 ?? 1,
      },
    ]);
  }

  chapterActionEvent(data: { type: string; chapterid: string; chapterNumber: number }) {
    switch (data.type) {
      case 'new-chapter':
        this.createChapter();
        return;
      case 'edit':
        this.editChapter(data);
        return;
      case 'delete':
        this.removeChapter(data, this.bookId);
        return;
    }
  }

  private checkActiveTab() {
    return this.activatedRoute.paramMap.subscribe((params) => {
      this.bookId = params.get('bookId');
      this.type = params.get('type');
      if (params.get('type') === 'create') {
        this.selectedTab = 'book';
      } else {
        this.selectedTab = 'toc';
      }
    });
  }

  private createChapter() {
    this.router.navigate([
      'writing',
      {
        bookId: this.bookId,
        chapterNumber: this.chaptersFacade.getChapterCountAkita() + 1 ?? 1,
      },
    ]);
  }

  private getAllChapters() {
    return this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params) => {
          const bookId = params.get('bookId');
          const chapters = this.chaptersFacade.getAllAkita();
          if (this.bookId === bookId && bookId && chapters.length) {
            // lay trong akita
            return this.chaptersFacade.selectAllChapterAkita();
          }
          if (bookId) {
            return this.chaptersFacade.getAllChapters(bookId);
          }
          return of([]);
        })
      )
      .subscribe((res) => {
        console.log('all chapters res: ', res);
      });
  }

  private editChapter(chapter) {
    this.router.navigate([
      'writing',
      {
        chapterId: chapter.chapterid,
        bookId: this.bookId,
        chapterNumber: chapter.chapterNumber,
      },
    ]);
  }

  private removeChapter(chapter, bookId: string) {
    const status = this.bookForm.get('status').value;
    // this.chaptersFacade
    //   .removeChapter(chapter.chapterid, bookId, status)
    //   .pipe(tap((res) => { }))
    //   .subscribe((res) => {
    //     console.log('remove chapter res: ', res);
    //   });
  }

  private updateForm() {
    // if (this.bookId) {
    //   this.creationsFacade
    //     .selectEntityBook(this.bookId)
    //     .pipe(takeUntil(this.destroy$))
    //     .subscribe((book) => {
    //       if (book) {
    //         this.selectedBookStatus = book.status;
    //         this.bookForm.patchValue({
    //           title: book.title ?? '',
    //           description: book.description ?? '',
    //           categoryid: book.categoryid ?? '',
    //           genreIds: book.genreIds ?? [],
    //           tags: book.tags ?? [],
    //           completed: book.completed ?? false,
    //           status: book.status ?? 'DRAFT',
    //           audience: book.audience ?? 'none',
    //         });
    //         this.bookFormValueBefore = this.bookForm.value;
    //       }
    //     });
    // }
  }

  private initForm() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      tags: [''],
      categoryid: [null, Validators.required],
      genreIds: ['', Validators.required],
      audience: ['none'],
      completed: [false],
      status: ['DRAFT'],
      img: ['https://picsum.photos/200/300'],
      language: [''],
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
