import { Injectable } from '@angular/core';
import { GenresGear } from '../gears';
import { GenresQuery } from '../states/genres';

@Injectable({ providedIn: 'root' })
export class GenresFacade {
  genreList$ = this.genresQuery.selectAll();

  constructor(
    private genresGear: GenresGear,
    private genresQuery: GenresQuery
  ) {
  }

  selectAllGenresAkita() {
    return this.genresQuery.selectAll();
  }

  getAllGenres() {
    return this.genresGear.getAllGenres();
  }

}
