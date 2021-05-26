import { Router } from '@angular/router';
import { Directive, Injectable, OnInit } from '@angular/core';
import { CreationsFacade } from '@awread/core/creations';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ListPage implements OnInit {
  creations$ = this.creationsFacade.creations$;
  loading$ = this.creationsFacade.loading$;
  constructor(
    private router: Router,
    private creationsFacade: CreationsFacade,
  ) { }

  ngOnInit(): void {
    this.creationsFacade.get().subscribe(value => {
      console.log('value', value);
    });
  }

  updateBookStatus(book) {

  }

  addChapter(bookId: string) {

  }

  editBook(bookId: string) {
    // this.booksFacade.setBookIdActive(bookId);
    this.router.navigate(['detail', { bookId: bookId, type: 'edit' }]);
  }

  removeBook(bookId: string) {
  }
}
