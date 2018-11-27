import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'If Else SwitchDemo';

  per : number = 69;
  age: number = 15;
  grade : string = '';
  cssClassName: string = '';

  calculateGrade(){
    if(this.per >= 70){
      this.grade = 'Distinction';
    }else if(this.per >= 60){
      this.grade = 'First';
      this.cssClassName = 'first';
    }else if(this.per >= 50){
      this.grade = 'Second';
      this.cssClassName = 'second';
    }else if(this.per >= 40){
      this.grade = 'PASS';
      this.cssClassName = 'pass';
    }else{
      this.grade = 'Fail';
    }
  }  
}
