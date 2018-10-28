import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event And Property Binding Demo';
  
  result : number = 0;

  getNum1Value(num1:string):void{
    console.log("....!"+num1);
  }
  getFullValue(num1:string):void{
    console.log("Final Value: "+num1);
  }
  add(num1:string,num2:string):void{
    this.result = parseInt(num1) + parseInt(num2);
  }
  sub(num1:string,num2:string):void{
    this.result = parseInt(num1) - parseInt(num2);
  }
  mul(num1:string,num2:string):void{
    this.result = parseInt(num1) * parseInt(num2);
  }
  div(num1:string,num2:string):void{
    let no = parseInt(num2);
    if(no != 0){
      this.result = parseInt(num1) / parseInt(num2);
    }else{
      this.result = 0;
    }    
  }
}
