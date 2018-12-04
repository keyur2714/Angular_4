import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
@Component({
  selector: 'app-employee-lst',
  templateUrl: './employee-lst.component.html',
  styleUrls: ['./employee-lst.component.css']
})
export class EmployeeLstComponent implements OnInit {

  headerList : string[] = ["Name","Dept Name","Salary"];
  columnList: string[] = ["name","deptName","salary"];
  empList:Employee[]=[
    {
      empId: 27,
      name: "keyur",
      deptName: "IT",
      salary: 12123
    }
  ];

  selectedEmployee: Employee = new Employee();

  constructor() { }

  ngOnInit() {
    let employee1 = new Employee();
    employee1.empId = 26;
    employee1.name = "denish";
    employee1.deptName = "IT";
    employee1.salary = 21212;

    let employee2 = new Employee();
    employee2.empId = 44;
    employee2.name = "vinit";
    employee2.deptName = "SALES";
    employee2.salary = 32122;

    this.empList.push(employee1);
    this.empList.push(employee2);
  }

  getSelectedRow(data){
    this.selectedEmployee = data;
  }
}
