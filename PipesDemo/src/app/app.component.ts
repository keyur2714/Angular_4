import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PipesDemo';
  name : string = 'keyur';
  no = 0;
  status : string = 'pass';
  emp = {
    name: "keyur",
    city: "surat",
    dept: "IT"
  };
  today = new Date();
  numbers = interval(10000);

  ngOnInit(){
    this.numbers.subscribe(
      (num)=>{
        this.name = this.name + "k";
      }
    )
  }
}
