import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

declare const __ISSTORYBOOK__;
let isStorybook = true;
try {
  console.log('__ISSTORYBOOK__', __ISSTORYBOOK__);
} catch (error) {
  isStorybook = false;
  console.log('is website, not storybook', isStorybook);
}

@NgModule({
  imports: [
    CommonModule,
    isStorybook ? RouterModule.forRoot([], { useHash: true }) : RouterModule,
    isStorybook ? BrowserAnimationsModule : []

  ],
  exports: [RouterModule, ReactiveFormsModule, FontAwesomeModule],
  declarations: [],
})
export class StorybookSupportModule { }
