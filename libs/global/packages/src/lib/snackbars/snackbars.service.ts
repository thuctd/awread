import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'any',
})
export class SnackbarsService {
  constructor(private toast: HotToastService) {}

  showSuccess(message: string) {
    this.toast.success(message);
  }

  showError(message: string) {
    this.toast.error(message);
  }

  showWarning(message: string) {
    this.toast.warning(message);
  }

}
