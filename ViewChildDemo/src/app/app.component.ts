import { Component, ElementRef,ViewChild } from '@angular/core';
import { StringUtilComponent } from './string-util/string-util.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@ViewChildDemo';
  inputString : string = '';

  resultString : string = '';
  
  @ViewChild('str')
  s: ElementRef;

  @ViewChild("result")
  r: ElementRef;

  @ViewChild(StringUtilComponent)
  stringUtilComponent : StringUtilComponent;

  save():void{
    this.inputString = this.s.nativeElement.value;
    this.s.nativeElement.value = '';
    console.log(this.s.nativeElement.value);
    console.log(this.r.nativeElement.innerHTML);
  }

  reverseStr():void{
    this.inputString = this.s.nativeElement.value;
    this.resultString = this.stringUtilComponent.convertToReverseString(this.inputString);
  }

  upperCase():void{
    this.inputString = this.s.nativeElement.value;
    this.resultString = this.stringUtilComponent.convertToUpperCase(this.inputString);
  }

  lowerCase():void{
    this.inputString = this.s.nativeElement.value;
    this.resultString = this.stringUtilComponent.convertToLowerCase(this.inputString);
  }
}
