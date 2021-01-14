import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  StoreConfig,
  ActiveState,
} from '@datorama/akita';
import { Book } from '../../..';

export interface BooksState extends EntityState<Book>, ActiveState {}
// export interface BookUI {}

// export interface BooksUIState extends EntityState<BookUI>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'books', resettable: true, idKey: 'bookid' })
export class BooksStore extends EntityStore<BooksState> {
  // ui: EntityUIStore<BookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

  updateBookById(id: string, book) {
    return this.update(id, (e) => {
      return {
        ...e,
        ...book,
      };
    });
  }

  addBook(book) {
    return this.add(book, { prepend: true });
  }

  updateTotalChapterCount(bookid: string, isPublished = false) {
    return this.update(bookid, (book) => {
      return {
        ...book,
        totalChapterCount: book.totalChapterCount + 1,
        totalChapterCountPublished: isPublished
          ? book.totalChapterCountPublished + 1
          : book.totalChapterCountPublished,
      };
    });
  }
}
