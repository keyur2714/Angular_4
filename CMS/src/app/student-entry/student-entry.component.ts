import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray, Validators } from '@angular/forms'; 
import { Course } from '../course/course.model';
@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  msg: string = '';
  courseList : Course[] = [];
  constructor() { }

  ngOnInit() {
    let course1 = new Course();
    course1.id = 1;
    course1.courseName = "Angular";
    course1.duration = "7";
    course1.fees = 12000;
    course1.trainerName = "keyur";

    let course2 = new Course();
    course2.id = 2;
    course2.courseName = "Core Java";
    course2.duration = "5";
    course2.fees = 8000;
    course2.trainerName = "keyur";

    let course3 = new Course();
    course3.id = 3;
    course3.courseName = "BigData";
    course3.duration = "8";
    course3.fees = 15000;
    course3.trainerName = "denish";

    this.courseList.push(course1);
    this.courseList.push(course2);
    this.courseList.push(course3);

  }

  studentForm =new FormGroup({
    name: new FormControl('',Validators.required),
    mobileNo: new FormControl('',[Validators.required,Validators.minLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    course: new FormControl('-1',[Validators.required]),
    refferedBy: new FormControl()
  });

  save():void{
    console.log(this.studentForm.value);
  }

  reset():void{
    this.studentForm.reset();
  }
}
