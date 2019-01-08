export class AuthenticationService{
    isAuthenticated : boolean = false;
    successUrl : string = 'home';
    authenticate(email:string,password:string):boolean{
        if(email === 'keyurjava27@gmail.com' && password === 'India@123'){
            this.isAuthenticated = true;
            sessionStorage.setItem("token",email+'_sec');            
        }
        return this.isAuthenticated;
    }


    getIsAuthenticated():boolean{
        return this.isAuthenticated;
    }

    getSuccessUrl():string{
        return this.successUrl;
    }
    setSuccessUrl(successUrl:string):void{
        this.successUrl = successUrl;
    }

    signOut():void{
        this.isAuthenticated = false;
        sessionStorage.removeItem("token");
    }
}