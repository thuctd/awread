import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, ReactiveFormsModule, FontAwesomeModule],
  declarations: [],
  providers: [],
})
export class StorybookSupportModule { }
