import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from'@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMsg:string ='';
  constructor(private authenticationService : AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  login(email,password):void{
    let isLoggedIn = this.authenticationService.authenticate(email,password);
    if(isLoggedIn){
      let sUrl = this.authenticationService.getSuccessUrl();
      console.log(sUrl);
      this.router.navigate([sUrl]);
    }else{
      this.errorMsg = 'Invalid Username and password';
      this.router.navigate(['signin']);
    }
  }
}
