import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'any',
})
export class SnackbarsService {
  constructor(private snackBar: MatSnackBar) {}

  create(message: string, duration = 2000, action: string = 'Ok') {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar-notify', 'bg-green-400'],
    });
  }

  update(message: string, duration = 2000, action: string = 'Ok') {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['snackbar-notify', 'bg-green-400'],
    });
  }

  warning(message: string, duration = 2000, action: string = 'Ok') {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['snackbar-notify', 'bg-yellow-400'],
    });
  }

  error(message: string, duration = 2000, action: string = 'Ok') {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['snackbar-notify', 'bg-red-500'],
    });
  }

  info(message: string, duration = 2000, action: string = 'Ok') {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['snackbar-notify', 'bg-blue-400'],
    });
  }
}
