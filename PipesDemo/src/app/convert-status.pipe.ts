import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertStatus'
})
export class ConvertStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let status:string ='';
    if(value === 'pass')
      status = 'approved';
    else if(value === 'fail')  
      status = 'fail';
    else if(value === 'atkt')  
      status = 'warning';
    return status;
  }

}
