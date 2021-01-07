import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseOnOutsideDirective } from './close-on-outside.directive';

@NgModule({
  declarations: [CloseOnOutsideDirective],
  imports: [CommonModule],
  exports: [CloseOnOutsideDirective],
})
export class CloseOnOutsideModule {}
