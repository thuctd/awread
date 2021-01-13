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
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private chaptersFacade: ChaptersFacade,
    private booksFacade: BooksFacade,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.chapterId = this.activatedRoute.snapshot.params['chapterId'];
    this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.chapterNumber = this.activatedRoute.snapshot.params['chapterNumber'];
    this.initForm();
    this.updateForm();
  }

  chapterAction() {
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

  private createChapter() {
    if (this.bookId) {
      this.chaptersFacade
        .createChapter({
          ...this.chapterForm.value,
          bookid: this.bookId,
          createdat: new Date(),
          updatedat: new Date(),
        })
        .subscribe();
    } else {
    }
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
    });
  }

  private updateForm() {
    if (this.chapterId) {
      // edit chapter
      this.updateFormChapterDetail();
    } else {
      // adđ chapter
      this.updateFormChapterCreate();
    }
  }

  private updateFormChapterCreate() {
    this.booksFacade.selectEntityBook(this.bookId).subscribe((book) => {
      if (book) {
        this.chapterForm.patchValue({
          bookTitle: book.title ?? '',
          chapterNumber: this.chapterNumber ?? '',
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
    });
    this.cd.detectChanges();
  }
}
