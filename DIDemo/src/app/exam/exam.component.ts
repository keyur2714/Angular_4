import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../services/IQuestion';
import { AngularQuestion } from '../services/AngularQuestion';
import { SpringQuestion } from '../services/SpringQuestion';
import { BigDataQuestion } from '../services/BigDataQuestion';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [
    {
      provide : IQuestion ,useClass : SpringQuestion
    }
  ]
})
export class ExamComponent implements OnInit {
  
  question : string = '';

  constructor(private iQuestion : IQuestion) { }

  ngOnInit() {
    this.question = this.iQuestion.askQuestion();
  }

}
