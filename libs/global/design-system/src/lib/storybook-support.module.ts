import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [CommonModule, RouterModule.forRoot([], { useHash: true })],
    exports: [RouterModule, ReactiveFormsModule, FontAwesomeModule],
    declarations: [],
    providers: [],
})
export class StorybookSupportModule { }
