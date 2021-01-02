import { tap } from 'rxjs/operators';
import { BooksFacade } from './../../../../../feature-auth/src/lib/facades/books.facade';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChaptersFacade } from '@awread/writer/web/feature-auth';
import { ActivatedRoute } from '@angular/router';
import { Directive, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class WritingPage implements OnInit {
  chapterId: string;
  chapterForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private chaptersFacade: ChaptersFacade,
    private booksFacade: BooksFacade
  ) {}

  ngOnInit(): void {
    this.chapterId = this.activatedRoute.snapshot.params['chapterId'];
    this.initForm();
    this.updateForm();
  }

  chapterAction() {
    const formaValue = this.chapterForm.value;
    if (this.chapterId) {
      this.chaptersFacade
        .updateChapter({ ...formaValue, chapterid: this.chapterId })
        .subscribe((res) => console.log('update chapter res: ', res));
    } else {
      this.chaptersFacade
        .createChapter({ ...formaValue })
        .subscribe((res) => console.log('create chapter res: ', res));
    }
  }

  private initForm() {
    this.chapterForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', Validators.required],
      status: ['DRAFT'],
    });
  }

  private updateForm() {
    if (this.chapterId) {
      const bookId: any = this.booksFacade.getBookIdActive();
      console.log('bookid active: ', bookId);
      this.chaptersFacade
        .getChapterDetail(this.chapterId, bookId)
        .pipe(
          tap((res) => {
            console.log('get chapter detail result: ', res);
            if (res['data'] && res['data']['allChapters']['nodes'].length) {
              const chapter = res['data']['allChapters']['nodes'][0];
              this.chapterForm.patchValue({
                title: chapter.title,
                content: chapter.content,
                status: chapter.status,
              });
            }
          })
        )
        .subscribe();
    }
  }
}
