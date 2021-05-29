import { tap, switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef, Directive, Injectable, OnInit } from '@angular/core';
import { ChaptersFacade } from '@awread/core/chapters';
import { MatDialog } from '@angular/material/dialog';
import { WrtWritingPopupReadTemplate } from '../../atomics/templates';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class WritingPage implements OnInit {
  book;
  chapterForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private chaptersFacade: ChaptersFacade,
    private cd: ChangeDetectorRef,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getChapter();
    this.initForm();
  }

  getChapter() {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => this.chaptersFacade.getChapter(params.get('bookId'), params.get('chapterId'))),
      )
      .subscribe((chapter) => {
        console.log('chapter', chapter);
        this.updateForm(chapter);
        this.book = chapter.book;
        this.cd.detectChanges();
      });
  }

  chapterAction(action) {
    switch (action) {
      case 'preview':
        this.openPreview();
        break;
      case 'save':
        this.save();
        break;
      case 'delete':
        this.delete();
        break;
      case 'publish':
        this.publish();
        break;
      default:
        console.warn('does not have this action', action);
        break;
    }
  }

  openPreview() {
    const dialogRef = this.matDialog.open(WrtWritingPopupReadTemplate, {
      width: '72rem',
      height: '42.5rem',
      data: {
        title: this.chapterForm.value.title,
        content: this.chapterForm.value.content,
      },
    });

    return dialogRef.afterClosed();
  }

  private delete() {
    // this.chaptersFacade
    //   .updateChapter({
    //     ...this.chapterForm.value,
    //     chapterid: this.chapterId,
    //     bookid: this.bookId,
    //     updatedat: new Date(),
    //   })
    //   .subscribe();
  }

  private publish() {
    // if (this.bookId) {
    //   const chapterFormValue = this.chapterForm.value;
    //   const isPublishedBook =
    //     +this.chapterNumber === 1 && chapterFormValue.status === 'PUBLISHED';
    //   const chapter = {
    //     ...chapterFormValue,
    //     bookid: this.bookId,
    //     createdat: new Date(),
    //     updatedat: new Date(),
    //   };
    //   this.chaptersFacade.createChapter(chapter, isPublishedBook).subscribe();
    // } else {
    // }
  }

  save() {

  }

  private initForm() {
    this.chapterForm = this.fb.group({
      title: [null],
      content: [null],
      published: [false],
      position: [null],
      chapterId: [null],
      bookId: [null]
    });
  }

  private updateForm(chapter) {
    this.chapterForm.patchValue({
      title: chapter.title ?? '',
      content: chapter.content ?? '',
      published: chapter.published ?? false,
      position: chapter.position,
      chapterId: chapter.chapterId,
      bookId: chapter.bookId
    });
  }

}
