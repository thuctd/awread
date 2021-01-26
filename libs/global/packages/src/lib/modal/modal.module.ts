import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, MatDialogModule],
})
export class ModalModule {}
