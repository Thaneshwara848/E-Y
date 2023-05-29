import { Component } from '@angular/core';

@Component({
  selector: 'app-templetdriven',
  templateUrl: './templetdriven.component.html',
  styleUrls: ['./templetdriven.component.css']
})
export class TempletdrivenComponent {
  
  userdata(userform:any){
    console.log(userform)
  }
}
