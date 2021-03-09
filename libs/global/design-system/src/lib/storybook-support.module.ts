import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

if (__ISSTORYBOOK__ === undefined) {
  var __ISSTORYBOOK__ = false;
}
@NgModule({
  imports: [
    CommonModule,
    __ISSTORYBOOK__ ? RouterModule.forRoot([], { useHash: true }) : RouterModule,
    __ISSTORYBOOK__ ? BrowserAnimationsModule : []

  ],
  exports: [RouterModule, ReactiveFormsModule, FontAwesomeModule],
  declarations: [],
})
export class StorybookSupportModule { }
