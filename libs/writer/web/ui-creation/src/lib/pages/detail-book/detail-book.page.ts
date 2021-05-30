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
export class DetailBookPage implements OnInit, OnDestroy {
  bookForm: FormGroup;
  bookId: string;
  chapterEntity$: any;
  chapters$ = this.chaptersFacade.chapters$;
  book;
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
  ) { }

  get f() {
    return this.bookForm.controls;
  }

  ngOnInit(): void {
    // this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.checkActiveTab();
    this.initForm();
    this.updateForm();
    this.categories$ = this.categoriesFacade.selectAllCategoriesAkita();
    this.genres$ = this.genresFacade.selectAllGenresAkita();
  }

  switchTab(tabName: string) {
    if (tabName === 'toc') {
      this.addorUpdateBookToServer();
    } else {
      this.selectedTab = 'book';
    }
  }

  genresEvent(genres) {
    this.genresListSelected = genres;
  }

  // them hoac cap nhat sach
  addorUpdateBookToServer() {
    this.submitted = true;
    const { title } = this.bookForm.value;
    if (this.bookForm.invalid) {
      return;
    }
    if (!title.trim()) {
      alert('Tiêu đề không được để trống!');
      return;
    }
    const book = this.bookSaveDatabase();
    if (this.bookId) {
      this.updateBook(book);
    } else {
      // this.creationsFacade.addBook(book).subscribe(() => {
      //   this.selectedTab = 'toc';
      //   this.bookFormValueBefore = this.bookForm.value;
      //   this.cd.detectChanges();
      // });
    }
  }

  private updateBook(book) {
    // const idsGenresAdd = this.genresListSelected; // dung de them genre khi user them genre ko co trong DB
    // if (JSON.stringify(this.bookFormValueBefore) !== JSON.stringify(this.bookForm.value)) {
    //   const idsGenresRemove = this.creationsFacade.getGenreIdsByBookIdAkita(this.bookId);
    //   this.creationsFacade.editBook(book, idsGenresRemove).subscribe(() => {
    //     this.selectedTab = 'toc';
    //     this.cd.detectChanges();
    //   });
    //   this.bookFormValueBefore = this.bookForm.value;
    // } else {
    //   this.selectedTab = 'toc';
    // }
  }

  private bookSaveDatabase() {
    // const userid = this.currentUserFacade.getUserId();
    // const genres = this.bookForm.value.genreIds.map((id) => ({
    //   genreid: id,
    //   name: this.genresFacade.getNameGenreBaseIdAkita(id),
    // }));
    // const book = {
    //   ...this.bookForm.value,
    //   bookid: this.bookId,
    //   genres,
    //   userid, // this.genresListChip ??
    // };
    // return book;
  }

  cancelCreateBook(action: string) {
    if (action === 'CANCEL') {
      // this.openModalCancelCreateBook();
      if (this.bookId) {
        this.updateForm(); // update lai form neu ho lo tay xoa may truong roi bam HUY, khi quay lai tab nay se bi rong
        this.selectedTab = 'toc';
      } else {
        this.router.navigate(['list']);
      }
    } else {
      // const titleToast =
      //   'Thêm thông tin truyện thành công. Tiếp tục tạo mục lục cho truyện!';
      // this.addorUpdateBookToServer(titleToast);
    }
  }

  // private openModalCancelCreateBook() {
  //   const dataModal = {
  //     name: 'cancel',
  //     title: 'Bạn có chắc chắn muốn hủy bỏ ko?',
  //     actionCancelText: 'Hủy bỏ',
  //     actionConfirmText: 'Đồng ý',
  //   };
  //   const dialogRef = this.modalFacade.openModal(dataModal);
  //   dialogRef.afterClosed().subscribe((isOk) => {
  //     console.log('isOk: ', isOk);
  //     if (isOk) {
  //       this.router.navigate(['/list']);
  //     }
  //   });
  // }

  // private openModalConfirmSaveBook() {
  //   const dataModal = {
  //     title: 'Bạn có muốn lưu thông tin truyện ko?',
  //     actionCancelText: 'Hủy bỏ',
  //     actionConfirmText: 'Đồng ý',
  //   };
  //   const dialogRef = this.modalFacade.openModal(dataModal);
  //   dialogRef.afterClosed().subscribe((isOk) => {
  //     console.log('isOk: ', isOk);
  //     if (isOk) {
  //       this.selectedTab = 'toc';
  //       this.addorUpdateBookToServer();
  //     } else {
  //       this.selectedTab = 'book';
  //     }
  //   });
  // }

  selectedStatusEvent(status: string) {
    this.selectedBookStatus = status;
    this.bookForm.patchValue({ status });
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
