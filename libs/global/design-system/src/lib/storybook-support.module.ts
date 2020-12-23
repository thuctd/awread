import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { environment } from '@awread/global/environments';

console.log('environment??', environment);
@NgModule({
  imports: [
    CommonModule,
    // RouterTestingModule,
    // phan nay cu dung router di, de anh nghien cuu cach khac phuc
    RouterModule,
  ],
  exports: [
    // RouterTestingModule,
    // phan nay cu dung router di, de anh nghien cuu cach khac phuc
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  declarations: [],
  providers: [],
})
export class StorybookSupportModule {}
