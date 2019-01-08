import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ManagecourseComponent } from './managecourse/managecourse.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { CourseEntryComponent } from './course-entry/course-entry.component';
import { CommonModule } from '@angular/common';
const courseRoutes : Routes = [
      {
        path:'',component:ManagecourseComponent,canActivate: [AuthGuard],
        children: [
          {
            path: 'courseDetail/:id',component : CoursedetailComponent
          },
          {
            path : 'coursesEntry' , component: CourseEntryComponent
          }     
        ]
      }  
];

@NgModule({
    declarations: [],
    imports : [
        CommonModule,
        RouterModule.forChild(courseRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class CourseRoutingModule{

}