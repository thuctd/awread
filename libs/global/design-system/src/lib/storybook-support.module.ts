import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


declare const __ISSTORYBOOK__: boolean;
console.log('is storybook?', __ISSTORYBOOK__);

@NgModule({
  imports: [CommonModule, __ISSTORYBOOK__ ? RouterModule.forRoot([], { useHash: true }) : RouterModule],
  exports: [RouterModule, ReactiveFormsModule, FontAwesomeModule],
  declarations: [],
})
export class StorybookSupportModule { }
