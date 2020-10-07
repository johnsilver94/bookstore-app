import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BOOKS_API_URL } from './app-injection-tokens';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MsalModule,
  MsalInterceptor,
  MsalService,
} from '@azure/msal-angular';
import { Logger, LogLevel } from 'msal';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

export function loggerCallback(logLevel, message, piiEnabled) {
  console.log(message);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MsalModule,
    MsalModule.forRoot({
      auth: {
          clientId: environment.uiClienId,
          authority: 'https://login.microsoftonline.com/' + environment.tenantId,
          redirectUri: environment.redirectUrl,
          postLogoutRedirectUri: environment.redirectUrl,
          validateAuthority: true,
          navigateToLoginRequestUrl: true
      },
      system: {
        logger: new Logger(loggerCallback, {
            correlationId: '1234',
            level: LogLevel.Verbose,
            piiLoggingEnabled: true,
        }),
    },
      cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: isIE
      },
    },
    {
      popUp: isIE,
      consentScopes: [
        'user.read',
        'openid',
        'profile',
        environment.scopeUri
      ],
      protectedResourceMap: [
        ['https://graph.microsoft.com/v1.0/me', ['user.read']],
        ['http://localhost:5000/orders', [environment.scopeUri]]
      ]
    })
    ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: BOOKS_API_URL,
      useValue: environment.booksApi
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
