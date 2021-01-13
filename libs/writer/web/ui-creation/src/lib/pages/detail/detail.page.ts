import { switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { ChaptersFacade } from '@awread/writer/web/feature-auth';
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
import { of } from 'rxjs';

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
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private booksFacade: BooksFacade,
    private currentUserFacade: CurrentUserFacade,
    private chaptersFacade: ChaptersFacade,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.checkActiveTab();
    this.getAllChapters();
    this.initForm();
    this.updateForm();
  }

  switchTab(tabName: string) {
    if (this.bookForm.invalid) {
      alert('Khong dc de trong bat ky truong nao!');
      return;
    }
    this.selectedTab = tabName;
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
        this.removeChapter(data);
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

  private removeChapter(chapter) {
    this.chaptersFacade
      .removeChapter(chapter.chapterid)
      .pipe(tap((res) => {}))
      .subscribe((res) => {
        console.log('remove chapter res: ', res);
      });
  }

  private updateForm() {
    if (this.bookId) {
      this.booksFacade.selectEntityBook(this.bookId).subscribe((book) => {
        if (book) {
          this.bookForm.patchValue({
            title: book.title,
            description: book.description ?? '',
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
