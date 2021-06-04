import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
import { ErrorInterceptor } from "./error.interceptor";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    SocialLoginModule,
  ],
  exports: [
    SocialLoginModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApolloInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
    { provide: MAT_DATE_LOCALE, useValue: 'vi' },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        onError: (error) => {
          console.warn('error on social login:', error);
        },
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('265413764260-sqgbeot6gpv6u7dp6moov7jp2blkvp3i.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('178697176886410')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
})
export class GlobalSettingsModule { }
