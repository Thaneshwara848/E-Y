import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-seetha',
  templateUrl: './seetha.component.html',
  styleUrls: ['./seetha.component.css']
})
export class SeethaComponent {

  
  constructor(private serv:ChatService){}
  msgs:any=[]
  sendmsg(rama:any){

    this.msgs=this.serv.chatApp(rama);
    //console.log("RAMA :"+rama)
  }
}
