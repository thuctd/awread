import { Pipe, PipeTransform } from '@angular/core';
import { GenresQuery } from '../states/genres';
import { pipeName } from '../../../../tools/pipe-name.tool';
@Pipe({
  name: 'genreName'
})
export class GenreNamePipe implements PipeTransform {
  constructor(
    private genreQuery: GenresQuery
  ) {

  }
  //LEARN: Pipe tool
  transform(value: string | string[] | undefined, ...args: any[]): any {
    return pipeName(value, this.genreQuery);
  }

}
