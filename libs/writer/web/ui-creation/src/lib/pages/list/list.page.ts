import { Router } from '@angular/router';
import { BooksFacade } from '@awread/writer/web/feature-auth';
import { Directive, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ListPage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  constructor(private booksFacade: BooksFacade, private router: Router) {}

  ngOnInit(): void {
    // this.booksFacade.setBooksToStore().subscribe();
  }

  updateBookStatus(book) {
    return this.booksFacade
      .updateBookStatus(book.bookid, book.status)
      .subscribe();
  }

  addChapter(bookId: string) {
    this.router.navigate(['writing', { bookId: bookId }]);
  }

  editBook(bookId: string) {
    // this.booksFacade.setBookIdActive(bookId);
    this.router.navigate(['detail', { bookId: bookId }]);
  }

  removeBook(bookId: string) {
    return this.booksFacade.removeBook(bookId).subscribe();
  }
}
