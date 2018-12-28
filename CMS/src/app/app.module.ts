import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { CourseListComponent } from './course/course-list.component';
import { CourseService } from './course/course-service';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentEntryComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
