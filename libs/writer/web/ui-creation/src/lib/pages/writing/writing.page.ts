import { tap, switchMap, debounceTime } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Directive, Injectable, OnInit } from '@angular/core';
import { ChaptersFacade } from '@awread/core/chapters';
import { MatDialog } from '@angular/material/dialog';
import { WrtWritingPopupReadTemplate } from '../../atomics/templates';
import { CreationsFacade } from '@awread/core/creations';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class WritingPage implements OnInit {
  bookId;
  chapterId;
  book;
  chapterForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private chaptersFacade: ChaptersFacade,
    private creationsFacade: CreationsFacade,
    private matDialog: MatDialog,
    private router: Router,
    private cd: ChangeDetectorRef,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getChapter();

  }

  getChapter() {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          console.log('params', this.activatedRoute.snapshot);
          this.chapterId = params.get('chapterId');
          this.bookId = params.get('bookId');
          if (this.chapterId == 'new') {
            return this.creationsFacade.selectEntity(this.bookId);
          } else {
            return this.chaptersFacade.getChapter(this.bookId, this.chapterId);
          }
        }),
      )
      .subscribe((result) => {
        console.log('result', result);
        this.book = result.book;
        if (this.chapterId == 'new') {
          this.updateForm({ bookId: this.bookId, chapterId: this.chapterId, position: this.activatedRoute.snapshot.params['position'] });
        } else {
          this.updateForm(result);
        }
      });
  }

  chapterAction(action) {
    switch (action) {
      case 'back':
        this.location.back();
        break;
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
    this.chaptersFacade.delete(this.chapterForm.value.chapterId).subscribe(v => console.log('delete ', v));
  }

  private publish() {
    this.chapterForm.patchValue({ published: true });
    if (this.book.published == false) {
      this.save(true, true);
    } else {
      this.save(true);
    }
  }

  save(published = false, changeBookStatus = false) {
    if (this.chapterId == 'new') {
      this.chaptersFacade.create(this.chapterForm.value, published, changeBookStatus).subscribe(value => {
        console.log('value', value);
        this.location.back();
      })
    } else {
      this.chaptersFacade.update(this.chapterForm.value).subscribe(value => {
        console.log('value', value);
      })
    }
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
      title: chapter.title ?? null,
      content: chapter.content ?? null,
      published: chapter.published ?? false,
      position: chapter.position ?? 0,
      chapterId: chapter.chapterId,
      bookId: chapter.bookId
    });
    // this.cd.detectChanges();
  }



}
