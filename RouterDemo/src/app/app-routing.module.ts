import { NgModule } from '@angular/core';
import { Routes,RouterModule, NoPreloading, PreloadingStrategy } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CourseEntryComponent } from './course/course-entry/course-entry.component';
const appRoutes: Routes  = [
     {
        path:'home',component:HomeComponent
      },      
      {
        path: 'managecourse', loadChildren : './course/course.module#CourseModule'
      },
      {
        path:'aboutus',component:AboutusComponent
      },
      {
        path:'contactus',component:ContactusComponent 
      },
      {
        path: 'signin', component : SigninComponent
      },
      {
        path: 'signout', component : SignoutComponent
      }  
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes,
          {preloadingStrategy : NoPreloading})
    ],
    exports: [
        RouterModule        
    ]
})
export class AppRoutingModule{

}