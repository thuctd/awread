import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreNamePipe } from './pipes/genre-name.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [GenreNamePipe],
  exports: [GenreNamePipe],
  providers: [GenreNamePipe]
})
export class CoreGenresModule { }
