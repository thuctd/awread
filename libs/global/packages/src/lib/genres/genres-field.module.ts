import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresField } from './genres.field';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GenresField],
  imports: [
    CommonModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [GenresField],
})
export class GenresFieldModule {}
