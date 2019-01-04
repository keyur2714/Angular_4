import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router:Router,private authenticationService:AuthenticationService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        console.log(state.url);
        this.authenticationService.setSuccessUrl(state.url);
        if(this.authenticationService.getIsAuthenticated())
            return true;
        else{
            this.router.navigate(['signin']);    
        }
        return false;
    }
}