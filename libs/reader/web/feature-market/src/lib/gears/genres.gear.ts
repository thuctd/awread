import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { GenresApi } from '../apis';
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
          const result = res['data']['allGenres']['nodes'];
          console.log(result);
          this.genresStore.set(result);
        }
      }),
      catchError((err) => {
        console.error('An error occurred:', err);
        return throwError(err);
      })
    );
  }

}
