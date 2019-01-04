import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ManagecourseComponent } from './managecourse/managecourse.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { CourseEntryComponent } from './course-entry/course-entry.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthenticationService } from './auth/authentication.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    ManagecourseComponent,
    CoursedetailComponent,
    CourseEntryComponent,
    SigninComponent,
    SignoutComponent   
  ],
  imports: [
    BrowserModule,
    RouterModule,     
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }