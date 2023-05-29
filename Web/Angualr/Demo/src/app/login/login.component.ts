import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private router:Router) {}

  userlogin(uname:any,upass:any){

    console.log(uname);
    console.log(upass);

    if(uname=="Thanesh"&& upass=="Thanesh@123"){
      this.router.navigate(['/home'])
    }
    else{
      alert("Invalid USER ")
    }
  }
}