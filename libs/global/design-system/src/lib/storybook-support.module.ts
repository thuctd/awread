import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [CommonModule, RouterModule.forRoot([], { useHash: true }),QuillModule.forRoot()],
    exports: [RouterModule, ReactiveFormsModule, FontAwesomeModule, QuillModule],
    declarations: [],
    providers: [],
})
export class StorybookSupportModule { }
