import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveAccountDetailComponent } from './active-account-detail/active-account-detail.component';
import { SharedModule } from 'src/app/shared.module';
import { Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
const routes:Routes =[
  {path:'',component:ActiveAccountDetailComponent}
]


@NgModule({
  declarations: [
    ActiveAccountDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  exports:[
    ActiveAccountDetailComponent,
    CommonModule,
    SharedModule,
    ComponentsModule
  ]
})
export class IsoPartnersModule { }
