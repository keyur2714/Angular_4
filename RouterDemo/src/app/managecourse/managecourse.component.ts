import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { Router } from '@angular/router';
import { CourseService } from './course-service';
@Component({
  selector: 'app-managecourse',
  templateUrl: './managecourse.component.html',
  styleUrls: ['./managecourse.component.css'],
  providers : [CourseService]
})
export class ManagecourseComponent implements OnInit {

  courseList: Course [] = [];

  constructor(private router:Router,private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourseList().subscribe(
      (courseList: Course[])=>{
        this.courseList = courseList;
      }
    )
  }

  addCourse(){
    this.router.navigate(['coursesEntry']);
  }

}
