import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '@awread/global/packages';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ReadTemplate, DetailBookTemplate } from '@awread/writer/web/ui-creation';

@Injectable({ providedIn: 'root' })
export class ModalFacade {
  constructor(public matDialog: MatDialog) {}

  openModal(data) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '250px';
    dialogConfig.width = '600px';
    dialogConfig.panelClass = 'modal-reuse';
    dialogConfig.data = {
      name: data?.name ?? '',
      title: data?.title ?? 'Bạn có chắc chắn muốn huỷ bỏ?',
      description: data?.description ?? 'Thông báo',
      actionCancelText: data?.actionCancelText ?? 'Hủy',
      actionConfirmText: data?.actionConfirmText ?? 'Đồng ý',
    };
    return this.matDialog.open(ModalComponent, dialogConfig);
  }

  openPreview(): void {
    this.matDialog.open(ReadTemplate, {
      width: '72rem',
      minHeight: '42.5rem'
    });
  }

  openDetailBook(): void {
    this.matDialog.open(DetailBookTemplate, {
      width: '55rem',
      height: '33rem'
    });
  }
}
