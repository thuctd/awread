import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
declare const __ISSTORYBOOK__: string;
// console.log('is storybook?', __ISSTORYBOOK__);
@NgModule({
    imports: [CommonModule, __ISSTORYBOOK__ ? RouterTestingModule : RouterModule],
    exports: [__ISSTORYBOOK__ ? RouterTestingModule : RouterModule, ReactiveFormsModule, FontAwesomeModule],
    declarations: [],
    providers: [],
})
export class StorybookSupportModule { }
