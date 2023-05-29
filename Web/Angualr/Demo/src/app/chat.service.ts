import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  mychats:any=[]
  chatApp(msg:any)
  {
    this.mychats.push(msg);
      console.log(""+msg)
      return this.mychats;
  }
}
