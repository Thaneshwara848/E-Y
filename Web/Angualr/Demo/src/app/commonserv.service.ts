import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonservService {

  constructor() { }

  mymsg:any;
  commondblogic(msg:any){
   this.mymsg= msg;
    console.log("100 lines code  from servivec ")
  }
}
