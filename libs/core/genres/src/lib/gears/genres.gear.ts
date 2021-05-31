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
    this.genresStore.setLoading(true);
    return this.genresApi.getAllGenres().pipe(
      tap((result) => { console.log('genre', result) }),
      map((result) => this.genresStore.set(result)),
      tap(() => { this.genresStore.setLoading(false) }),
    );
  }

  getGenreById(genreId: string) {
    return this.genresApi.getGenreById(genreId).pipe(
      tap((res) => { }),
    );
  }

}
