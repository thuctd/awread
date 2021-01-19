import { map, startWith, switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import {
  Category,
  CategoryFacade,
  ChaptersFacade,
  Genre,
  GenresFacade,
} from '@awread/writer/web/feature-auth';
import { CurrentUserFacade } from '@awread/writer/web/feature-auth';
import { BooksFacade } from '@awread/writer/web/feature-auth';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Directive,
  Injectable,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { combineLatest, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailPage implements OnInit {
  bookForm: FormGroup;
  bookId: string;
  chapterEntity$: any;
  chapterListByBookId$ = this.chaptersFacade.chapterListByBookId$;
  tabsHead = [
    { name: 'Tables of Contents', tabName: 'toc' },
    { name: 'Story Details', tabName: 'book' },
  ];
  selectedTab = 'toc';
  selectedBookStatus = 'DRAFT';
  categories$;
  genres$;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private booksFacade: BooksFacade,
    private currentUserFacade: CurrentUserFacade,
    private chaptersFacade: ChaptersFacade,
    private categoryFacade: CategoryFacade,
    private genresFacade: GenresFacade,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.checkActiveTab();
    this.getAllChapters();
    this.initForm();
    this.updateForm();
    this.categories$ = this.getCategories();
    this.genres$ = this.getAllGenres();
  }

  switchTab(tabName: string) {
    if (this.bookForm.invalid) {
      alert('Khong dc de trong bat ky truong nao!');
      return;
    }
    this.selectedTab = tabName;
  }

  getAllGenres() {
    return combineLatest([
      this.genresFacade.selectAllGenresAkita(),
      this.bookForm.get('genres').valueChanges.pipe(startWith('')),
    ]).pipe(
      map(([genres, genresValueForm]: [Genre[], string]) => {
        if (genres && genres.length) {
          return genres.filter((item) =>
            item.name.toLowerCase().includes(genresValueForm.toLowerCase())
          );
        }
        return [];
      })
    );
  }

  getCategories() {
    return combineLatest([
      this.categoryFacade.selectAllCategoriesAkita(),
      this.bookForm.get('categoryname').valueChanges.pipe(startWith('')),
    ]).pipe(
      map(([categories, categoryValueForm]: [Category[], string]) => {
        if (categories && categories.length) {
          return categories.filter((item) =>
            item.name.toLowerCase().includes(categoryValueForm.toLowerCase())
          );
        }
        return [];
      })
    );
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

  chapterActionEvent(data: {
    type: string;
    chapterid: string;
    chapterNumber: number;
  }) {
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

  bookSubmitEvent() {
    const userid = this.currentUserFacade.getUserId();
    const book = { ...this.bookForm.value, bookid: this.bookId, userid };
    if (this.bookId) {
      this.booksFacade.editBook(book).subscribe(() => {
        this.selectedTab = 'toc';
        this.cd.detectChanges();
      });
    } else {
      this.booksFacade.addBook(book).subscribe();
    }
  }
  selectedStatusEvent(status: string) {
    this.selectedBookStatus = status;
    this.bookForm.patchValue({ status });
  }

  private checkActiveTab() {
    return this.activatedRoute.paramMap.subscribe((params) => {
      this.bookId = params.get('bookId');
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
        switchMap((params) => {
          const bookId = params.get('bookId');
          const chapters = this.chaptersFacade.getAllAkita();
          if (bookId && chapters.length) {
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
    this.chaptersFacade
      .removeChapter(chapter.chapterid, bookId, status)
      .pipe(tap((res) => {}))
      .subscribe((res) => {
        console.log('remove chapter res: ', res);
      });
  }

  private updateForm() {
    if (this.bookId) {
      this.booksFacade.selectEntityBook(this.bookId).subscribe((book) => {
        if (book) {
          this.selectedBookStatus = book.status;
          this.bookForm.patchValue({
            title: book.title ?? '',
            description: book.description ?? '',
            categoryname: book.categoryname ?? '',
            tags: book.tags ?? [],
            completed: book.completed ?? false,
            status: book.status ?? 'DRAFT',
          });
        }
      });
    }
  }

  private initForm() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      categoryname: [''],
      tags: [''],
      genres: [''],
      audience: [''],
      completed: [false],
      status: ['DRAFT'],
      img: ['https://picsum.photos/200/300'],
      language: [''],
    });
  }
}
