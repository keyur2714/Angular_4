import { Component,OnInit } from '@angular/core';
@Component({
    selector : 'app-failure-message',
    template : `<h1 class="alert alert-danger">{{errorMessage}}</h1>`,
    styles : []
})
export class FailureComponent implements OnInit{
    errorMessage : string = "";
    ngOnInit(){
        this.errorMessage = "Sorry but this will not work...!";
    }
}