import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
// declare const __ISSTORYBOOK__: boolean;
// console.log('__ISSTORYBOOK__', __ISSTORYBOOK__);
// console.log('is storybook?', __ISSTORYBOOK__);
@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, ReactiveFormsModule, FontAwesomeModule],
  declarations: [],
  providers: [],
})
export class StorybookSupportModule {}
