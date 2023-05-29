import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-rama',
  templateUrl: './rama.component.html',
  styleUrls: ['./rama.component.css']
})
export class RamaComponent {

  constructor(private serv:ChatService){}
  msgs:any=[]
  sendmsg(rama:any){

    this.msgs=this.serv.chatApp(rama);
    //console.log("RAMA :"+rama)
  }
}
