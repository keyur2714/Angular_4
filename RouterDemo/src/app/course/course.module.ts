import { NgModule } from '@angular/core';
import { ManagecourseComponent } from './managecourse/managecourse.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { CourseEntryComponent } from './course-entry/course-entry.component';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        ManagecourseComponent,
        CoursedetailComponent,
        CourseEntryComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        CourseRoutingModule
    ]
})
export class CourseModule{
      constructor(){
        console.log("Course Module Loaded...");
      }
}