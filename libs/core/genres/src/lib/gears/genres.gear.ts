import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { GenresApi } from '../apis/genres.api';
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
      map((res) => {
        if (
          res['data'] &&
          res['data']['allGenres'] &&
          res['data']['allGenres']['nodes'].length
        ) {
          this.genresStore.set(res['data']['allGenres']['nodes']);
        }
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

  getGenreById(genreId: string) {
    return this.genresApi.getGenreById(genreId).pipe(
      tap((res) => {
        console.log('detail genre', res);
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

}
