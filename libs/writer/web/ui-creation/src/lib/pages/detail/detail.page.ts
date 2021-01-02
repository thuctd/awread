import { ChaptersFacade } from '@awread/writer/web/feature-auth';
import { CurrentUserFacade } from '@awread/writer/web/feature-auth';
import { BooksFacade } from '@awread/writer/web/feature-auth';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Directive, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class DetailPage implements OnInit {
  bookForm: FormGroup;
  bookId: string;
  chapterEntity$: any;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private booksFacade: BooksFacade,
    private currentUserFacade: CurrentUserFacade,
    private chaptersFacade: ChaptersFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.params['bookId'];
    this.chapterEntity$ = this.booksFacade.selectEntityChapterBookById(
      this.bookId
    );
    this.initForm();
    this.updateForm();
  }

  chapterActionEvent(data: { type: string; chapterid: string }) {
    switch (data.type) {
      case 'new-chapter':
        this.router.navigate['writing'];
        return;
      case 'edit':
        this.router.navigate(['writing', { chapterId: data.chapterid }]);
        return;
      case 'delete':
        this.chaptersFacade
          .removeChapter(data.chapterid)
          .subscribe((res) => console.log('remove chapter res: ', res));
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

  private updateForm() {
    if (this.bookId) {
      const book: any = this.booksFacade.getBookByIdStore(this.bookId);
      this.bookForm.patchValue({
        title: book.title,
        description: book.description ?? '',
        tags: book.tags ?? [],
        completed: book.completed ?? false,
        status: book.status ?? 'DRAFT',
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
