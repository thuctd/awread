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
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    SocialLoginModule,
  ],
  exports: [
    SocialLoginModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApolloInterceptor, multi: true },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
    { provide: MAT_DATE_LOCALE, useValue: 'vi' },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('265413764260-sqgbeot6gpv6u7dp6moov7jp2blkvp3i.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1687794138050695')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
})
export class GlobalCoreModule { }
