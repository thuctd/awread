import { CurrentUserFacade } from '@awread/core/users';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Directive, Injectable, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { combineLatest, of, Subject } from 'rxjs';
import { CreationsFacade } from '@awread/core/creations';
import { ChaptersFacade } from '@awread/core/chapters';
import { CategoriesFacade } from '@awread/core/categories';
import { GenresFacade } from '@awread/core/genres';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailBookPage implements OnInit {
  bookForm: FormGroup;
  bookId: string;
  chapterEntity$: any;
  chapters$ = this.chaptersFacade.chapters$;
  book;
  selectedTab = 'toc';
  selectedBookStatus = 'DRAFT';
  genresListSelected = [];
  tabsHead = [
    { name: 'THÔNG TIN TRUYỆN', href: null, isActive: true },
    { name: 'MỤC LỤC', href: ['../toc'], isActive: false },
  ];
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
  ) { }

  detailBookAction(event) {
    switch (event) {
      case 'cancel':

        break;
      case 'publish':

        break;
      case 'save':

        break;

      default:
        break;
    }
  }

  ngOnInit(): void {
    this.initForm();
    this.getBook();
    this.categories$ = this.categoriesFacade.selectAllCategoriesAkita();
    this.genres$ = this.genresFacade.selectAllGenresAkita();
  }

  genresEvent(genres) {
    this.genresListSelected = genres;
  }

  getBook() {
    return this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => this.creationsFacade.selectEntity(params.get('bookId')))
      )
      .subscribe((res) => {
        console.log('book Data', res);
        this.updateForm(res);
      });
  }

  updateForm({ book, genreIds, authors }) {
    this.bookForm.patchValue({
      title: book.title,
      description: book.description,
      categoryId: book.categoryId,
      genreIds: book.genreIds,
      audience: book.audience,
      completed: book.completed,
      published: book.published,
      type: book.type,
      age: book.age,
    })
  }

  private initForm() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      description: [null],
      categoryId: [null],
      genreIds: [[]],
      audience: ['none'],
      completed: [false],
      published: [false],
      type: "0",
      age: "2"
    });
  }

}
