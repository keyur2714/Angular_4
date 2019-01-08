import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  courseId: number = 0;
  trainerName: string = '';
  constructor(private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        console.log(params.id);
        this.courseId = params.id;
      }
    )
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        console.log(paramMap);
        console.log(paramMap.get("id")+" =========");
      }
    )
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        console.log(params.trainerName);
        this.trainerName = params.trainerName;
      }
    )
    this.activatedRoute.queryParamMap.subscribe(
      (queryParamMap)=>{
        console.log(queryParamMap);
        console.log(queryParamMap.get("trainerName")+" =========");
      }
    )
  }

}
