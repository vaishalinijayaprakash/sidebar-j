import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "./page/home/home.component";
import { LoginComponent } from "./page/login/login.component";

const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'iso/home',component:HomeComponent,loadChildren:() => import ('./page/iso-partners/iso-partners.module').then(iso =>iso.IsoPartnersModule)}
  
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}