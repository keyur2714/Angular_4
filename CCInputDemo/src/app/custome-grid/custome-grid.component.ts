import { Component, OnInit, Input } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() {
  }

}
