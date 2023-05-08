import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule
  ],
  providers: [ 
    { provide:HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
