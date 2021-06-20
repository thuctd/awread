import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CreationsRoutingGear {

  constructor(
    private router: Router
  ) {
  }

  list() {
    this.router.navigate(['list']);
  }

  bookToc(bookId, replaceUrl = false) {
    this.router.navigate(['/list', bookId, 'toc'], { replaceUrl });
  }

  saveNewChapter(bookId, chapterId, replaceUrl = false) {
    this.router.navigate(['list', bookId, 'toc', chapterId, 'writing'], { replaceUrl });
  }

  createChapter(bookId, position) {
    this.router.navigate(['list', bookId, 'toc', 'new', 'writing', { position }]);
  }

  editChapter(chapter) {
    this.router.navigate(['list', chapter.bookId, 'toc', chapter.chapterId]);
  }

  createBook() {
    this.router.navigate(['list', 'new', 'detail']);
  }

  editBook(bookId) {
    this.router.navigate(['list', bookId, 'detail']);
  }

}
