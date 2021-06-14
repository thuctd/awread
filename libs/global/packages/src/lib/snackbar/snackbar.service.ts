import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'any',
})
export class SnackbarService {
  options = {
    style: {
      padding: '20px'
    }
  };

  constructor(private toast: HotToastService) { }

  showSuccess(message: string, duration?) {
    if (duration) {
      this.toast.success(message, { ...this.options, duration });
    } else {
      this.toast.success(message, this.options);
    }
  }

  showError(message: string, duration?) {
    if (duration) {
      this.toast.error(message, { ...this.options, duration });
    } else {
      this.toast.error(message, this.options);
    }
  }

  showWarning(message: string, duration?) {
    if (duration) {
      this.toast.warning(message, { ...this.options, duration });
    } else {
      this.toast.warning(message, this.options);
    }
  }

}
