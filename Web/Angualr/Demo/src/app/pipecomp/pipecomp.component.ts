import { Component } from '@angular/core';

@Component({
  selector: 'app-pipecomp',
  templateUrl: './pipecomp.component.html',
  styleUrls: ['./pipecomp.component.css']
})
export class PipecompComponent {

  job="SUresh is a jaVA tRainer";

  amount=123456789;
  d=new Date();

  obj={
    "id":100,
    "name":"Thanesh"
  }
  
}
