import { GenresApi } from './../api/genres.api';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { GenresStore } from '../states/genres';

@Injectable({ providedIn: 'root' })
export class GenresGear {

  constructor(
    private genresApi: GenresApi,
    private genresStore: GenresStore
  ) {
  }

  getAllGenres() {
    return this.genresApi.getAllGenres().pipe(
      map((result) => this.genresStore.set(result))
    );
  }

  getGenreById(genreId: string) {
    return this.genresApi.getGenreById(genreId).pipe(
      tap((res) => {  }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

}
