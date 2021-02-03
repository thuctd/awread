import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'any',
})
export class SnackbarsService {
  constructor(private toast: HotToastService) { }

  showSuccess(message: string) {
    this.toast.success(message, {
      style: {
        padding: '20px'
      }
    });
  }

  showError(message: string) {
    this.toast.error(message, {
      style: {
        padding: '20px'
      }
    });
  }

  showWarning(message: string) {
    this.toast.warning(message, {
      style: {
        padding: '20px'
      }
    });
  }

}
