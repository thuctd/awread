import { tap } from 'rxjs/operators';
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
      })
      .subscribe();
  }

  private createChapter() {
    if (this.bookId) {
      this.chaptersFacade
        .createChapter({ ...this.chapterForm.value, bookid: this.bookId })
        .subscribe();
    } else {
      alert('create chapter loi nhe babe, chon sach di!');
    }
  }

  chapterStatusEvent(type: string) {
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
      console.log('bookid active: ', this.bookId);
      this.chaptersFacade
        .getChapterDetail(this.chapterId, this.bookId)
        .valueChanges.pipe(
          tap((res) => {
            console.log('get chapter detail result: ', res);
            if (res['data'] && res['data']['allChapters']['nodes'].length) {
              const chapter = res['data']['allChapters']['nodes'][0];
              this.patchValueForm(chapter);
            }
          })
        )
        .subscribe();
    } else {
      this.booksFacade.selectEntityBook(this.bookId).subscribe((book) => {
        if (book) {
          this.chapterForm.patchValue({
            bookTitle: book.title ?? '',
            chapterNumber: book['chaptersByBookid']?.totalCount + 1 ?? '',
          });
          this.cd.detectChanges();
        }
      });
    }
  }

  private patchValueForm(chapter) {
    const chapterNumber = this.activatedRoute.snapshot.params['chapterNumber'];
    this.chapterStatus = chapter.status ?? 'DRAFT';
    this.chapterForm.patchValue({
      title: chapter.title ?? '',
      content: chapter.content ?? '',
      status: chapter.status ?? 'DRAFT',
      bookTitle: chapter['bookByBookid']['title'] ?? '',
      // bookId: chapter['bookByBookid']['bookid'] ?? '',
      chapterNumber: chapterNumber ?? '',
    });
    this.cd.detectChanges();
  }
}
