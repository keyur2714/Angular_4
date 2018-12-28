import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class CourseService {

    appURL : string = 'http://localhost:3000/course';

    constructor(private http:Http){        
    }

    getCourseList():Observable<Response>{
        return this.http.get(this.appURL);
    }
}