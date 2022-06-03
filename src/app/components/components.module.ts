import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    SideNavComponent,
 
  ],
  imports: [
    CommonModule ,
    SharedModule,
    RouterModule,
    HttpClientModule,
  //  HttpClient
  ],
  exports:[
    SideBarComponent,
    HeaderComponent,
    CommonModule,
    SharedModule,
    SideNavComponent,
    RouterModule,
    // HttpClient,
     HttpClientModule
  ]
})
export class ComponentsModule { }
