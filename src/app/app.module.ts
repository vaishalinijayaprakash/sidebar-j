import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-Routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
//import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PageModule } from './page/page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
// import { HttpClientModule,HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule ,
      PageModule,
      SharedModule,
      ComponentsModule,
      AppRoutingModule,
    //  HttpClientModule,
    //   HttpClient,
      BrowserAnimationsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
