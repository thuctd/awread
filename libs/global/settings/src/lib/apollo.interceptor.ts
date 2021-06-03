import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, } from '@angular/common/http';
import { catchError, first, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ApolloInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Filter your endpoint in order to only edit the graphql-related requests
    // if (req.url.indexOf('/graphql') > -1) {
    //   // Get your jwt from your usual source, can be a facade, a service, or even sync data like localStorage
    //   return this.afAuth.idToken.pipe(
    //     // Make sure the request won't replay when your token gets updated
    //     first(),
    //     switchMap((token) => {
    //       // Simply add the Authorization header to the request
    //       if (token) {
    // const clone = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // // And you're done !
    // return next.handle(clone);
    //       }
    //       return next.handle(req);
    //     })
    //   );
    // }
    // If it's not a graphql request, just give it to the next handler.
    // const token = localStorage.getItem("token");
    // if (!!token) {
    //   req = req.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    // }

    if (req.url.includes('/graphql')) {
      //  Simply add the Authorization header to the request
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        // console.log('accessToken', accessToken);
        const clone = req.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // And you're done !
        return next.handle(clone);
      }
      return next.handle(req);
    }
    return next.handle(req);
  }

  // private handleUnknownError(request: HttpRequest<any>, next: HttpHandler) {
  //   return next.handle(request).pipe(
  //     catchError(err => {
  //       if (err instanceof HttpErrorResponse) {
  //         switch (err.status) {
  //           case 401:
  //             return this.handle401Error(request, next);
  //           case 0:
  //             return this.handleUnknownError(request, next);
  //           default:
  //             return this.router.navigate(['system-error']);
  //         }
  //       } else {
  //         return throwError(err);
  //       }
  //     })
  //   );
  // }
}
