import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private toast: HotToastService) { }

  showSuccess(message: string, duration?) {
    this.toast.success(message, {
      style: {
        padding: '20px'
      },
      duration
    });
  }

  showError(message: string, duration?) {
    this.toast.error(message, {
      style: {
        padding: '20px'
      },
      duration
    });
  }

  showWarning(message: string, duration?) {
    this.toast.warning(message, {
      style: {
        padding: '20px'
      },
      duration
    });
  }

}
