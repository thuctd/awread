import { async } from '@angular/core/testing';
import { CategoryFacade } from './../facades/category.facade';
import { Directive, Injectable, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { BooksFacade, EventFacade, GenresFacade } from '../facades';
import { Genre } from '../models';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class HomePage implements OnInit {
  imageObject: Array<any> = [];
  bookList$ = this.booksFacade.bookList$;
  genreList$ = this.genresFacade.genreList$;
  evetList$ = this.eventsFacede.eventList$;
  isLoading$ = this.booksFacade.selectLoadingAkita();
  sldiers;
  getGoodBooks;
  getLatestBooks;
  getFeatureBooks;
  filteredBooks$;
  loading$ = false;

  constructor(private booksFacade: BooksFacade, private eventsFacede: EventFacade, private genresFacade: GenresFacade, private categoryFacade: CategoryFacade) {
    this.setImageObject();
  }

  ngOnInit(): void {
    this.categoryFacade.getAllCategories().subscribe();
    this.booksFacade.getAllBooks().subscribe();
    this.genresFacade.getAllGenres().subscribe();
    this.eventsFacede.getAllEvents().subscribe();
    this.booksFacade.getGoodBooks().subscribe((books) => {
      this.getGoodBooks = books.slice(0, 5);
    });
    this.booksFacade.getLatestBooks().subscribe((books) => {
      this.getLatestBooks = books;
    });
    this.booksFacade.getFeatureBooks().subscribe((books) => {
      this.getFeatureBooks = books.slice(0, 8);
    });
    this.loadFirstByGenre();
  }

  setImageObject() {
    this.eventsFacede.getAllEvents().subscribe(
      (data: any) => {
        this.sldiers = data.map((image) => {
          return {
            image: image.image,
            thumbImage: image.thumbImage,
            alt: image.alt,
            title: image.title,
          };
        });
        this.imageObject = this.sldiers;
      },
      (error) => {
        if (error != null) {
          console.log(error);
        }
      }
    );
  }

  filterItemsByGenre(genre: Genre) {
    this.loading$ = true;
    setTimeout(() => {
      this.filteredBooks$ = this.booksFacade.getGenreBooks(genre.id);
      this.loading$ = false;
    }, 1000);
  }

  private loadFirstByGenre() {
    this.filteredBooks$ = this.bookList$.pipe(
      map((items) =>
        items.filter((item) => {
          return item.genres.includes(items[0].id);
        })
      )
    );
  }
}
