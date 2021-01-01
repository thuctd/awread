import { Router } from '@angular/router';
import { BooksFacade } from './../../../../../feature-auth/src/lib/facades/books.facade';
import { Directive, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ListPage implements OnInit {
  bookList$ = this.booksFacade.bookList$;
  constructor(private booksFacade: BooksFacade, private router: Router) {}

  ngOnInit(): void {
    this.booksFacade.getAllBooks().subscribe();
  }

  updateBookStatus(book) {
    return this.booksFacade.updateBookStatus(book.bookid, book.status);
  }

  addChapter(bookId: string) {
    this.router.navigate(['writing', bookId]);
  }

  editBook(bookId: string) {
    this.router.navigate(['detail', bookId]);
  }

  removeBook(bookId: string) {
    return this.booksFacade.removeBook(bookId);
  }
}
