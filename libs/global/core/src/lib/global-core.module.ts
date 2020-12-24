import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "@awread/global/environments";

import { APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";

import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { createApollo } from "./apollo.config";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApolloInterceptor } from "./apollo.interceptor";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApolloInterceptor, multi: true },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GlobalCoreModule {}
