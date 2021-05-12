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

  transform(value: string | string[] | undefined, ...args: any[]): any {
    // if (isObject(value) && (value as any).id === 'custom-service') {
    //   return (value as any).serviceName;
    // } else {
    return pipeName(value, this.genreQuery);
    // }
  }

}
