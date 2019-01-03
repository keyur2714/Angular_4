import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managecourse',
  templateUrl: './managecourse.component.html',
  styleUrls: ['./managecourse.component.css']
})
export class ManagecourseComponent implements OnInit {

  courseList: Course [] = [
    {
      id: 1,
      courseName: 'Angular',
      fees: 12000
    },
    {
      id: 2,
      courseName: 'Java',
      fees: 8000
    },
    {
      id: 3,
      courseName: 'Hadoop',
      fees: 15000
    }
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addCourse(){
    this.router.navigate(['coursesEntry']);
  }

}
