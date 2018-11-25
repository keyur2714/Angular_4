import { Component,OnInit } from '@angular/core';
import { Employee } from './employee.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Array Demo';
  name: string = 'keyur';en
  friendNameList : string[] = [
    "keyur",
    "denish",
    "vinit"
  ];

  rollNoList: number [] = [32,24,4,26,44];

  ngOnInit(){
    console.log("=============");
    this.friendNameList.push("Ravi");

    //javascript way
    // let emp = {
    //   empId : 54,
    //   name: "piyush",
    //   dept : "IT",
    //   salary : 43432,
    //   city: "navsari"
    // };

    //type script way
    let emp = new Employee();
    emp.dept = "IT";
    emp.city = "salary";
    emp.empId = 54;
    emp.name = "piyush";
    emp.salary = 12123;

    this.employeeList.push(
      emp
    );
  }

  //Javascript Way
  // employeeList = [
  //   {
  //   empId: 27,
  //   name : "keyur",
  //   city: "surat",
  //   salary: 12121,
  //   dept: "IT"
  //   },
  //   {
  //   empId: 26,
  //   name : "denish",
  //   city: "surat",
  //   salary: 12333,
  //   dept: "SALES"
  //   }
  // ];

  //Type Script Way
  employeeList : Employee[] = [
    {
    empId: 27,
    name : "keyur",
    city: "surat",
    salary: 12121,
    dept: "IT"
    },
    {
    empId: 26,
    name : "denish",
    city: "surat",
    salary: 12333,
    dept: "SALES"
    }
  ];
}
