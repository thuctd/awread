import { Injectable } from '@angular/core';
import { GenresGear } from '../gears';
import { GenresQuery } from '../states/genres';

@Injectable({ providedIn: 'root' })
export class GenresFacade {
  genres$ = this.genresQuery.selectAll();

  constructor(
    private genresGear: GenresGear,
    private genresQuery: GenresQuery
  ) {
  }

  selectAllGenresAkita() {
    return this.genresQuery.selectAll();
  }

  getAllGenresAkita() {
    return this.genresQuery.getAll();
  }

  getAllGenres() {
    return this.genresGear.getAllGenres();
  }

}
