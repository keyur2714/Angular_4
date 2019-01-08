import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  template: '',
  styles: ['']
})
export class SignoutComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.authenticationService.signOut();
    this.router.navigate(['signin']);
  }

}
