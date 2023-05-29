import { Component } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component {
  constructor(private db : CommonservService){

  }
  msg:any;
  a2component(){
   // console.log("100 lines code ")
   this.msg=this.db.mymsg;
   //this.db.commondblogic();
  }
}
