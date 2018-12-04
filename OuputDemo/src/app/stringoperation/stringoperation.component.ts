import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stringoperation',
  templateUrl: './stringoperation.component.html',
  styleUrls: ['./stringoperation.component.css']
})
export class StringoperationComponent implements OnInit {

  @Output("reverseString")
  revStr = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  reverse(str){
    console.log("===========1=========");
    console.log(str.split(""));
    console.log(str.split("").reverse());
    console.log(str.split("").reverse().join());
    let revStr = str.split("").reverse().join('');
    this.revStr.emit(revStr);
  }

}
