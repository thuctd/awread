import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

declare const __ISSTORYBOOK__: boolean;
console.log('is storybook?', __ISSTORYBOOK__);

@NgModule({
  imports: [
    CommonModule,
    __ISSTORYBOOK__ ? RouterModule.forRoot([], { useHash: true }) : RouterModule,
    __ISSTORYBOOK__ ? NoopAnimationsModule : BrowserAnimationsModule

  ],
  exports: [RouterModule, ReactiveFormsModule, FontAwesomeModule],
  declarations: [],
})
export class StorybookSupportModule { }
