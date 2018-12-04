import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  msg: string = '';

  @Output()
  getFormattedMsg = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log("===========1=======");
    let msg = "Hello "+this.msg;
    this.getFormattedMsg.emit(msg);
  }

}
