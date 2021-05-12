import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, } from '@angular/common/http';
import { catchError, first, switchMap, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { throwError } from 'rxjs';
import { SnackbarsService } from '@awread/global/packages';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private snackbarsService: SnackbarsService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse && event.body.errors) {
            event.body.errors.forEach(error => {
              this.snackbarsService.showError(error.name ? `${error.name}: ${error.message}` : error.message);
            });
          }
        },
        errorResponse => {
          if (errorResponse instanceof HttpErrorResponse) {
            errorResponse.error.errors.forEach(error => {
              this.snackbarsService.showError(error.name ? `${error.name}: ${error.message}` : error.message);
            });
          }
        }
      ));

  }


}
