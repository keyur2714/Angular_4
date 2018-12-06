import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-util',
  templateUrl: './string-util.component.html',
  styleUrls: ['./string-util.component.css']
})
export class StringUtilComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  convertToUpperCase(str):string{
    return str.toUpperCase();
  }

  convertToLowerCase(str):string{
    return str.toLowerCase();
  }

  convertToReverseString(str):string{
    let revStr = str.split("").reverse().join('');
    return revStr;
  }
}
