import { Pipe, PipeTransform } from '@angular/core';
import { GenresQuery } from '../states/genres';
import { pipeName } from '@awread/global/tools';
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
