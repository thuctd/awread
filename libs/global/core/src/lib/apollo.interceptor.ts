import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { first, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class ApolloInterceptor implements HttpInterceptor {
  constructor(public afAuth: AngularFireAuth) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Filter your endpoint in order to only edit the graphql-related requests
    if (req.url.indexOf('/graphql') > -1) {
      // Get your jwt from your usual source, can be a facade, a service, or even sync data like localStorage
      return this.afAuth.idToken.pipe(
        // Make sure the request won't replay when your token gets updated
        first(),
        switchMap((token) => {
          // Simply add the Authorization header to the request
          if (token) {
            const clone = req.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,
              },
            });
            // And you're done !
            return next.handle(clone);
          }
          return next.handle(req);
        })
      );
    }
    // If it's not a graphql request, just give it to the next handler.
    // const token = localStorage.getItem("token");
    // if (!!token) {
    //   req = req.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    // }
    // return next.handle(req);
  }
}
