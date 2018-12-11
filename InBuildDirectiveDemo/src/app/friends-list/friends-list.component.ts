import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  selectedFriend : string = '';

  friendName : string = 'Denish';

  friendsList : string[] = ["Gautam","Anugya","Mitali"];

  employeeList : Employee[] = [
    {
      empId : 27,
      name : "keyur",
      deptName : "IT",
      salary: 12121
    }
  ];

  person = {
    pid : 10,
    name : "keyur",
    city : "surat",
    mobileNo: "7387029671" 
  };

  constructor() { 
    console.log("Object Created...");
  }

  ngOnInit() {
    console.log("Component Inititalized...");
    this.friendsList.push("keyur");
    this.friendsList.push("denish");
    this.friendsList.push("vinit");

    let employee2 = new Employee();
    employee2.empId = 26;
    employee2.name = "denish";
    employee2.deptName = "IT";
    employee2.salary = 12222;

    let employee3 = new Employee();
    employee3.empId = 44;
    employee3.name = "SALES";
    employee3.salary = 22222;

    this.employeeList.push(employee2);
    this.employeeList.push(employee3);

  }

  setSelectedFriend(friend:string):void{
    console.log("=====Method Invoked...");
    this.selectedFriend = friend; 
  }
}
