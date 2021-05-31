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
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailBookPage implements OnInit {
  bookForm: FormGroup;
  bookId: string;
  categories$;
  genres$;
  chapters$ = this.chaptersFacade.chapters$;
  tabsHead = [
    { name: 'THÔNG TIN TRUYỆN', href: null, isActive: true },
    { name: 'MỤC LỤC', href: ['../toc'], isActive: false },
  ];

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private creationsFacade: CreationsFacade,
    private currentUserFacade: CurrentUserFacade,
    private chaptersFacade: ChaptersFacade,
    private categoriesFacade: CategoriesFacade,
    private genresFacade: GenresFacade,
    private location: Location,
    private cd: ChangeDetectorRef
  ) { }

  detailBookAction(event) {
    switch (event) {
      case 'cancel':
        this.location.back();
        break;
      case 'publish':
        this.bookForm.patchValue({ published: true });
        this.save();
        break;
      case 'save':
        this.save();
        break;

      default:
        console.log('event', event);
        break;
    }
  }

  save() {
    if (this.bookId == 'new') {
      this.creationsFacade.create(this.bookForm.value).subscribe(value => {
        console.log('value', value);
        this.location.back();
      })
    } else {
      this.creationsFacade.update(this.bookForm.value).subscribe(value => {
        console.log('value', value);
      })
    }
  }

  ngOnInit(): void {
    this.initForm();
    this.getBook();
    this.categories$ = this.categoriesFacade.selectAllCategoriesAkita();
    this.genres$ = this.genresFacade.selectAllGenresAkita();
  }

  getBook() {
    return this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          this.bookId = params.get('bookId');
          return this.creationsFacade.selectEntity(this.bookId);
        })
      )
      .subscribe((res) => {
        console.log('book Data', res);
        this.updateForm(res);
      });
  }

  updateForm({ book, genreIds, authors, authorIds }) {
    this.bookForm.patchValue({
      bookId: this.bookId,
      title: book.title,
      description: book.description,
      categoryId: book.categoryId,
      genreIds: genreIds,
      authorIds: authorIds,
      completed: book.completed,
      published: book.published,
      type: book.type,
      age: book.age,
    })
  }

  private initForm() {
    this.bookForm = this.fb.group({
      bookId: [''],
      title: ['', Validators.required],
      description: [null],
      categoryId: [null],
      genreIds: [[]],
      authorIds: [[]],
      publisherId: [null],
      completed: [false],
      published: [false],
      type: "0",
      age: "2"
    });
  }

}
