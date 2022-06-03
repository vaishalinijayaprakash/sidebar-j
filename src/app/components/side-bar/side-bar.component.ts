import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from 'src/app/core/IMenu';
import { MenuService } from 'src/app/core/menu.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
 
menuList: Observable<IMenu[]>;
constructor(private httpService: MenuService) { }

ngOnInit() {
  this.menuList = this.httpService.get<IMenu>("/assets/menu.json");
  this.menuList.subscribe(data =>{
    console.log("__",data);
  })

}

}
