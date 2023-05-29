import { Component } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {

  constructor(private db:CommonservService){

  }
  a3component(){
    // console.log("100 lines code ")
    //this.db.commondblogic();
  }
}
