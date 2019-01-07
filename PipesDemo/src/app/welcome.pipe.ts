import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    let welcomeMsg = "Welcome "+value;
    return welcomeMsg;
  }

}
