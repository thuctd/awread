import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { SnackbarService } from '@awread/global/packages';
import { tap } from 'rxjs/operators';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackbarService: SnackbarService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse && event.body && event.body.errors) {
            event.body.errors.forEach((error) => {
              if (error.message.includes('Invalid UUID, expected 32 hexadecimal characters')) {
                console.error('Cannot find this user', error);
              } else {
                this.snackbarService.showError(error.name ? `${error.name}: ${error.message}` : error.message);
              }
            });
          }
        },
        (errorResponse) => {
          if (errorResponse instanceof HttpErrorResponse) {
            console.log('errorResponse.error', errorResponse.error);
            if (errorResponse.error.error) {
              const error = errorResponse.error.error;
              this.snackbarService.showError(error.name ? `${error.name}: ${error.message}` : error.message);
            } else if (errorResponse.error.errors) {
              errorResponse.error.errors.forEach((error) => {
                this.snackbarService.showError(error.name ? `${error.name}: ${error.message}` : error.message);
              });
            }
          }
        }
      )
    );
  }
}
