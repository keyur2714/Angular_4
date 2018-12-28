import { Component, OnInit } from '@angular/core';
import { CourseService } from './course-service';
import { Course } from './course.model';
import { Response } from '@angular/http';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseList: Course[] = [];

  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courseService.getCourseList().subscribe(
      (success:Response)=>{
        console.log(success);
        console.log(success.json());
        this.courseList = success.json();
      },
      (error:Response)=>{

      }
    )
  }

}
