import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesNamePipe } from './pipes/category-name.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [CategoriesNamePipe],
  providers: [CategoriesNamePipe],
  declarations: [CategoriesNamePipe]
})
export class CoreCategoriesModule { }
