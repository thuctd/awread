import { CurrentUserFacade } from '@awread/core/users';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Directive, Injectable, OnInit, ChangeDetectorRef, OnDestroy, Input } from '@angular/core';
import { combineLatest, of, Subject } from 'rxjs';
import { CreationsFacade } from '@awread/core/creations';
import { ChaptersFacade } from '@awread/core/chapters';
import { CategoriesFacade } from '@awread/core/categories';
import { GenresFacade } from '@awread/core/genres';
import { switchMap } from 'rxjs/operators';
import { SnackbarService } from '@awread/global/packages';
import { MatDialog } from '@angular/material/dialog';
import { PopupChangeCoverOrgan } from '@awread/global/design-system';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailBookPage implements OnInit {
  bookForm: FormGroup;
  bookId: string;
  categories$ = this.categoriesFacade.selectAllCategoriesAkita();
  genres$ = this.genresFacade.selectAllGenresAkita();
  chapters$ = this.chaptersFacade.chapters$;
  tabsHead = [
    { name: 'THÔNG TIN TRUYỆN', href: null, isActive: true, isHidden: false },
    { name: 'MỤC LỤC', href: ['../toc'], isActive: false, isHidden: false },
  ];

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private creationsFacade: CreationsFacade,
    private cd: ChangeDetectorRef,
    private chaptersFacade: ChaptersFacade,
    private categoriesFacade: CategoriesFacade,
    private genresFacade: GenresFacade,
    private snackbarService: SnackbarService,
    private router: Router,
    public matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getBook();
  }

  getBook() {
    return this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          this.bookId = params.get('bookId');
          if (this.bookId == 'new') {
            return of(null);
          } else {
            return this.creationsFacade.selectEntity(this.bookId);
          }
        })
      )
      .subscribe((res) => {
        console.log('book Data', res, this.activatedRoute);
        if (!res) {
          this.newBookForm();
        } else {
          this.updateForm(res);
        }
      });
  }

  detailBookAction(event) {
    switch (event.type) {
      case 'cancel':
        this.router.navigate(['list']);
        break;
      case 'upload-image':
        this.uploadCover(event.data);
        break;
      case 'save':
        this.save();
        break;

      default:
        console.log('event', event);
        break;
    }
  }

  uploadCover(data) {
    const dialogRef = this.matDialog.open(PopupChangeCoverOrgan, {
      width: '55rem',
      height: '33rem',
      data: {
        id: this.bookForm.value.bookId,
        mode: 'book-cover'
      }
    });
    dialogRef.afterClosed().subscribe(({ success }) => {
      if (success) {
        this.bookForm.patchValue({ cover: true, updatedAt: new Date() });
        console.log('this.bookForm', this.bookForm.value);
        this.cd.detectChanges();
      }
    });
  }

  save() {
    this.bookForm.patchValue({ updatedAt: new Date() })
    if (this.bookId == 'new') {
      if (this.bookForm.invalid) {
        this.bookForm.get('title').setValue(this.bookForm.value.title, { emitEvent: true });
        this.bookForm.get('categoryId').setValue(this.bookForm.value.categoryId, { emitEvent: true });
        this.bookForm.markAllAsTouched();
        return this.snackbarService.showWarning('Vui lòng điền đủ thông tin');
      }

      this.creationsFacade.create(this.bookForm.value).subscribe(value => {
        console.log('value', value, this.bookId);
        this.router.navigate(['/list', this.bookForm.value.bookId, 'toc'], { replaceUrl: true });
      })
    } else {
      this.creationsFacade.update(this.bookForm.value).subscribe(value => {
        console.log('value', value);
      })
    }
  }

  newBookForm() {
    // console.log('route', this.activatedRoute, this.tabsHead);
    this.tabsHead[1].isHidden = true;
    this.cd.detectChanges();
    this.creationsFacade.generateUuid().subscribe(uuid => {
      this.bookForm.patchValue({ bookId: uuid });
      console.log('this form', this.bookForm.value);
    });
  }

  updateForm({ book, genreIds, authors, authorIds }) {
    // console.log('route', this.activatedRoute, this.tabsHead);
    this.tabsHead[1].isHidden = false;
    this.cd.detectChanges();
    this.bookForm.patchValue({
      bookId: this.bookId,
      title: book.title ?? null,
      description: book.description,
      categoryId: book.categoryId,
      genreIds: genreIds,
      authorIds: authorIds,
      completed: book.completed,
      published: book.published,
      cover: book.cover ?? false,
      type: book.type,
      age: book.age,
      updatedAt: book.updatedAt
    })
  }

  private initForm() {
    this.bookForm = this.fb.group({
      bookId: [null],
      title: [null, [Validators.required]],
      description: [null],
      categoryId: [null, [Validators.required]],
      genreIds: [[]],
      authorIds: [[]],
      publisherId: [null],
      completed: [false],
      published: [false],
      cover: [false],
      type: "0",
      age: "2",
      updatedAt: [null]
    });
  }

}
