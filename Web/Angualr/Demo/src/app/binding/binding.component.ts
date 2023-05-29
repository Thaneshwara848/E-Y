import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  abc(){
    alert("HI Good Mornig ...!")
  }
  fullname:any;
  myname(fn:string,ln:string){
  this.fullname=fn+ln;
   // alert("Hi Boss"+(fn + ln ))
  }
  name="Thanesh";
  //============================

  total=0;
  emi=0
  cal(p:any,roi:any,t:any){

    this.total=(p*t*roi)/100;
    this.emi=this.total/t;
  }

  xyzz=false;
}
