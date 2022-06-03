import { Injectable } from "@angular/core";
 import {HttpClient} from '@angular/common/http'
// import {catchError ,retry} from 'rxjs/operators'
// import { throwError } from "rxjs/internal/observable/throwError";

@Injectable({
    providedIn:'root'
})
export class MenuService{
    constructor(private _httpClient:HttpClient){

    }
 
  get<data>(url:string){
  return  this._httpClient.get<data[]>(`${url}`)
      
  }  

//   private handleError(error: any) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//         // Get client-side error
//         errorMessage = error.error.message;
//     } else {
//         // Get server-side error
//         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     return throwError(errorMessage);
// }
}