import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HotToastModule.forRoot(
      {
        position: 'bottom-right',
      }
    )
  ],
  exports: [
  ]
})
export class SnackbarModule { }
