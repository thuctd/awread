import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
@NgModule({
    imports: [CommonModule, RouterTestingModule],
    exports: [RouterTestingModule, ReactiveFormsModule, FontAwesomeModule],
    declarations: [],
    providers: [],
})
export class StorybookSupportModule { }
