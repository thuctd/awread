import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCoverComponent } from './default-cover.component';



@NgModule({
  declarations: [DefaultCoverComponent],
  imports: [
    CommonModule
  ],
  exports: [DefaultCoverComponent]
})
export class DefaultCoverModule { }
