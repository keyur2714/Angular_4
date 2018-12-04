import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@Output() Demos';

  fromattedMessage : string = '';

  revStr : string = '';

  getMessage(msg){
    console.log("===========2=======");
    this.fromattedMessage = msg;
  }


  getRevStr(str){
    console.log("=======2======"+str);
    this.revStr = str;
  }
}
