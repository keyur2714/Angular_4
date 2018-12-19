import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  msg: string = '';
  course: Course = new Course();

  constructor() { }

  ngOnInit() {
  }

  save(frm):void{
    console.log(frm);
    console.log(frm.value);
    console.log(frm.controls["id"].value);
    console.log(frm.controls["courseName"].value);
    if(frm.valid){
      this.msg="Course Created with Id: "+this.course.id;
    }else{
      this.msg='';
    }
  }

  reset(frm):void{
    //frm.setValue({id: 1,courseName: 'Angular',fees: 12000,trainerName: '',duration: ''});
    this.course.id = 0;
    this.course.courseName = '';
    this.course.fees = 0;
    this.course.trainerName = '';
    this.course.duration = '';
  }

}
