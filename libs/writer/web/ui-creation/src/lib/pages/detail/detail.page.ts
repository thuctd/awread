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

@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailPage implements OnInit {
  bookForm: FormGroup;
  bookId: string;
  chapterEntity$: any;
  chapterList = [];
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
    this.initForm();
    this.updateForm();
    this.booksFacade
      .selectEntityChapterBookById(this.bookId)
      .subscribe((chapters) => {
        if (chapters && chapters.length) {
          this.chapterList = chapters;
        } else {
          this.chapterList = [];
        }
        this.cd.detectChanges();
      });
  }

  createNewChapterEvent() {
    this.router.navigate(['writing', { bookId: this.bookId }]);
  }

  chapterActionEvent(data: {
    type: string;
    chapterid: string;
    chapterNumber: number;
  }) {
    switch (data.type) {
      case 'new-chapter':
        this.router.navigate(['writing', { bookId: this.bookId }]);
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
      .pipe(
        tap((res) => {
          if (res['data']) {
            this.refreshChapterAfterRemove(chapter);
          }
        })
      )
      .subscribe((res) => {
        console.log('remove chapter res: ', res);
      });
  }

  private refreshChapterAfterRemove(chapter) {
    this.chapterList = this.chapterList.filter(
      (item) => item.chapterid !== chapter.chapterid
    );
    this.cd.detectChanges();
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
