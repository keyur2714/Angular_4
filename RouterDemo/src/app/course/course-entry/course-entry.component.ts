import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {

  constructor(private location : Location ) { }

  ngOnInit() {
  }

  back():void{
    this.location.back();
  }
}
