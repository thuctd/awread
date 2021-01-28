import { tap, switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChaptersFacade, BooksFacade } from '@awread/writer/web/feature-auth';
import { ActivatedRoute } from '@angular/router';
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
export class WritingPage implements OnInit {
  chapterId: string;
  chapterForm: FormGroup;
  bookId: string;
  chapterStatus = 'DRAFT';
  chapterNumber: any;
  submitted = false;
  type = 'create';
  shouldShowStatusUI = false;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private chaptersFacade: ChaptersFacade,
    private booksFacade: BooksFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.chapterId = this.activatedRoute.snapshot.params['chapterId'];
    this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.chapterNumber = this.activatedRoute.snapshot.params['chapterNumber'];
    this.type = this.chapterId ? 'edit' : 'create';
    // this.shouldShowStatusUI = this.shouldShowStatus();
    this.getChapterWhenReloadPageHere();
    this.initForm();
    this.updateForm();
  }
  private getChapterWhenReloadPageHere() {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          const chapters = this.chaptersFacade.getAllAkita();
          if (this.bookId && chapters.length) {
            this.chaptersFacade.selectAllChapterAkita();
          }
          if (this.bookId) {
            this.shouldShowStatusUI = this.shouldShowStatus();
            setTimeout(() => this.cd.detectChanges(), 0);
            return this.chaptersFacade.getAllChapters(this.bookId);
          }
          return of([]);
        }),
        tap(() => { })
      )
      .subscribe(() => { });
  }

  chapterAction() {
    this.submitted = true;
    if (this.chapterForm.invalid) {
      return;
    }
    const { title, content } = this.chapterForm.value;
    if (!title.trim() || !content.trim()) {
      return;
    }
    this.shouldShowStatusUI = this.shouldShowStatus();
    if (this.chapterId) {
      this.editChapter();
    } else {
      this.createChapter();
    }
  }

  private editChapter() {
    this.chaptersFacade
      .updateChapter({
        ...this.chapterForm.value,
        chapterid: this.chapterId,
        bookid: this.bookId,
        updatedat: new Date(),
      })
      .subscribe();
  }

  private shouldShowStatus() {
    const statusChapterCurrent =
      this.chaptersFacade.getChapterEntityAkita(this.chapterId)?.status ??
      'DRAFT';
    const statusChapterBefore =
      this.chaptersFacade
        .getAllAkita()
        .find((item) => +item.chapterNumber === +this.chapterNumber - 1)
        ?.status ?? 'DRAFT';
    const check =
      (+this.chapterNumber === 1 && statusChapterCurrent !== 'PUBLISHED') ||
      (+this.chapterNumber > 1 &&
        statusChapterBefore === 'PUBLISHED' &&
        statusChapterCurrent !== 'PUBLISHED');
    return check;
  }

  private createChapter() {
    if (this.bookId) {
      const chapterFormValue = this.chapterForm.value;
      const isPublishedBook =
        +this.chapterNumber === 1 && chapterFormValue.status === 'PUBLISHED';
      const chapter = {
        ...chapterFormValue,
        bookid: this.bookId,
        createdat: new Date(),
        updatedat: new Date(),
      };
      this.chaptersFacade.createChapter(chapter, isPublishedBook).subscribe();
    } else {
    }
  }

  saveChapter() {
    this.chapterAction();
  }

  changeChapterStatusEvent(type: string) {
    this.chapterForm.patchValue({ status: type });
  }

  private initForm() {
    this.chapterForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', Validators.required],
      status: ['DRAFT'],
      bookTitle: [''],
      // bookId: [''],
      chapterNumber: [''],
      bookImg: [''],
    });
  }

  private updateForm() {
    if (this.chapterId) {
      // edit chapter
      this.updateFormChapterDetail();
    } else {
      // adđ chapter
      this.updateFormCreateChapter();
    }
  }

  private updateFormCreateChapter() {
    this.booksFacade.selectEntityBook(this.bookId).subscribe((book) => {
      if (book) {
        this.chapterForm.patchValue({
          bookTitle: book.title ?? '',
          chapterNumber: this.chapterNumber ?? '',
          bookImg: 'https://picsum.photos/200/300',
        });
      }
    });
  }
  private updateFormChapterDetail() {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          return this.chaptersFacade.getChapterDetail(
            params.get('chapterId'),
            params.get('bookId')
          );
        })
      )
      .subscribe((chapters) => {
        this.patchValueFormChapter(chapters[0]);
      });
  }

  private patchValueFormChapter(chapter) {
    this.chapterStatus = chapter.status ?? 'DRAFT';
    this.chapterForm.patchValue({
      title: chapter.title ?? '',
      content: chapter.content ?? '',
      status: chapter.status ?? 'DRAFT',
      bookTitle: chapter['bookByBookid']['title'] ?? '',
      // bookId: chapter['bookByBookid']['bookid'] ?? '',
      chapterNumber: this.chapterNumber ?? '',
      bookImg: 'https://picsum.photos/200/300',
    });
  }
}
