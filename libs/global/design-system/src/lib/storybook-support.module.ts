import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { QuillModule } from 'ngx-quill';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfiniteScrollModule } from '@awread/global/packages';

@NgModule({
    imports: [CommonModule, RouterTestingModule,QuillModule.forRoot()],
    exports: [RouterTestingModule, ReactiveFormsModule, FontAwesomeModule, QuillModule, InfiniteScrollModule],
    declarations: [],
    providers: [],
})
export class StorybookSupportModule { }
