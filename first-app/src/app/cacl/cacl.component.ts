import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cacl',
  templateUrl: './cacl.component.html',
  styleUrls: ['./cacl.component.css']
})
export class CaclComponent implements OnInit {

  revStr : string = '';

  constructor() { }

  ngOnInit() {
  }

  reverseString(str : string):void{
    console.log(str);
    console.log(str.split(''));//gives you Array
    console.log(str.split('').reverse());//Reverse Array
    console.log(str.split('').reverse().join(''));
    this.revStr = str.split('').reverse().join('');
  }

}
