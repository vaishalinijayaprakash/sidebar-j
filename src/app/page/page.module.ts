import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { IsoPartnersModule } from './iso-partners/iso-partners.module';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IsoPartnersModule,
    SharedModule,
    ComponentsModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    CommonModule,
    IsoPartnersModule,
    SharedModule,
    ComponentsModule
  ]

})
export class PageModule { }
