import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
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
      tap((res) => {
        console.log('genres: ', res);
        this.genresStore.set(res);
      })
    );
  }

}
