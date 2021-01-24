import { Router } from '@angular/router';
import { BooksFacade, ChaptersFacade } from '@awread/writer/web/feature-auth';
import { Directive, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ListPage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  isLoading$ = this.booksFacade.selectLoadingAkiata();
  constructor(
    private booksFacade: BooksFacade,
    private router: Router,
    private chaptersFacade: ChaptersFacade
  ) {}

  ngOnInit(): void {
    // this.booksFacade.setBooksToStore().subscribe();
  }

  updateBookStatus(book) {
    return this.booksFacade
      .updateBookStatus(book.bookid, book.status)
      .subscribe();
  }

  addChapter(bookId: string) {
    // get all chapter cho book nay
    this.chaptersFacade.getAllChapters(bookId).subscribe((res) => {
      const chapterNumber = this.chaptersFacade.getChapterCountAkita() + 1 ?? 1;
      this.router.navigate([
        'writing',
        {
          bookId: bookId,
          chapterNumber,
        },
      ]);
    });
  }

  editBook(bookId: string) {
    // this.booksFacade.setBookIdActive(bookId);
    this.router.navigate(['detail', { bookId: bookId, type: 'edit' }]);
  }

  removeBook(bookId: string) {
    return this.booksFacade.removeBook(bookId).subscribe();
  }
}
