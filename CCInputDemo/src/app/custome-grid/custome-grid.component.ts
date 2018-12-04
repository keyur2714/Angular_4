import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custome-grid',
  templateUrl: './custome-grid.component.html',
  styleUrls: ['./custome-grid.component.css']
})
export class CustomeGridComponent implements OnInit {

  @Input()
  columnHeaderList: string [] = [];

  @Input()
  columnList: string[] = [];

  @Input()
  dataList: any[] = [];

  @Output()
  getSelectedRow = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  selectedRow(data){
    this.getSelectedRow.emit(data);
  }
}
