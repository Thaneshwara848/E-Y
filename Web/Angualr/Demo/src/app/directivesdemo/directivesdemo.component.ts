import { Component } from '@angular/core';

@Component({
  selector: 'app-directivesdemo',
  templateUrl: './directivesdemo.component.html',
  styleUrls: ['./directivesdemo.component.css']
})
export class DirectivesdemoComponent {
  xyz=true
 
  names=["Abi","Bharath","Chandu","Darshu","Sundresh"];
 
  FRUITS=["Apple","babana","Chiku","Dates","Graps"]
  
  abc(fruit:any){
      this.FRUITS.push(fruit);
  }
}
