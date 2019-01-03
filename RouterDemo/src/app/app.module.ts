import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ManagecourseComponent } from './managecourse/managecourse.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { CourseEntryComponent } from './course-entry/course-entry.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    ManagecourseComponent,
    CoursedetailComponent,
    CourseEntryComponent   
  ],
  imports: [
    BrowserModule,
    RouterModule,     
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
