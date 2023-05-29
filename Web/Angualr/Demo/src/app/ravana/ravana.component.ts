import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-ravana',
  templateUrl: './ravana.component.html',
  styleUrls: ['./ravana.component.css']
})
export class RavanaComponent {
  constructor(private serv:ChatService){}

  msgs:any=[]
  sendmsg(ravana:any){

    this.msgs=this.serv.chatApp(ravana);
   
  }
}
