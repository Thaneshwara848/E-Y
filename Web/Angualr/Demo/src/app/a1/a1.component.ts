import { Component } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component {

  constructor(private db:CommonservService){

  }
  a1component(msg:any){
    this.db.commondblogic(msg);
   // console.log("100 lines code ")
  }
}
