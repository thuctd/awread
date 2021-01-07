import { switchMap } from 'rxjs/operators';
import { map, tap } from 'rxjs/operators';
import { ChaptersFacade } from '@awread/writer/web/feature-auth';
import { CurrentUserFacade } from '@awread/writer/web/feature-auth';
import { BooksFacade } from '@awread/writer/web/feature-auth';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  ChangeDetectorRef,
  Directive,
  Injectable,
  OnInit,
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
    this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.getAllChapters();
    this.initForm();
    this.updateForm();
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
    // console.log("let's go update book: ", book);
    if (this.bookId) {
      this.booksFacade.editBook(book).subscribe();
    } else {
      this.booksFacade.addBook(book).subscribe();
    }
    this.router.navigate(['list']);
  }

  selectedStatusEvent(status: string) {
    this.bookForm.patchValue({ status });
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
