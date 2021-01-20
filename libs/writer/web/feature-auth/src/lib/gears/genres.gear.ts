import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { GenresApi } from '../apis';
import { GenresStore } from '../states/genres';

@Injectable({ providedIn: 'root' })
export class GenresGear {
  constructor(private genresApi: GenresApi, private genresStore: GenresStore) {}

  getAllGenrest() {
    return this.genresApi.getAllGenres().pipe(
      map((res) => {
        console.log('ctaegories: ', res);
        if (res['data'] && res['data']['allGenres']['nodes'].length) {
          this.genresStore.set(res['data']['allGenres']['nodes']);
        }
      })
    );
  }
}
