import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';
@Injectable()
export class CourseService {


    appURL : string = 'http://localhost:3000/course';

    constructor(private http:HttpClient){        
    }

    getCourseList():Observable<Course[]>{          
        //let token = sessionStorage.getItem("token");   
        // const httpOptions = {
        //     headers: new HttpHeaders(
        //         {'authorization': `bearer ${token}`, observe : 'body'},                
        //     )
        // };     
        return this.http.get<Course[]>(this.appURL);
    }
}