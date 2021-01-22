import { Injectable } from '@angular/core';
import { GenresGear } from '../gears';
import { GenresQuery } from '../states/genres';

@Injectable({ providedIn: 'root' })
export class GenresFacade {
  constructor(
    private genresGear: GenresGear,
    private genresQuery: GenresQuery
  ) {}

  selectAllGenresAkita(): any {
    return this.genresQuery.selectAll();
  }

  getNameGenreBaseIdAkita(id: string) {
    return this.genresQuery.getEntity(id)?.name ?? '';
  }

  getAllGenres() {
    return this.genresGear.getAllGenrest();
  }
}
