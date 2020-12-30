import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPage } from './not-found.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: NotFoundPage
  }
];



@NgModule({
  declarations: [NotFoundPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [NotFoundPage]
})
export class NotFoundModule { }
