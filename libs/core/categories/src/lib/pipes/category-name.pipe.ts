import { Pipe, PipeTransform } from '@angular/core';
import { CategoriesQuery } from '../states/categories';
import { pipeName } from '../../../../tools/pipe-name.tool';
@Pipe({
  name: 'categoryName'
})
export class CategoriesNamePipe implements PipeTransform {
  constructor(
    private categoryQuery: CategoriesQuery
  ) {

  }
  //LEARN: Pipe tool
  transform(value: string | string[] | undefined, ...args: any[]): any {
    return pipeName(value, this.categoryQuery);
  }

}
