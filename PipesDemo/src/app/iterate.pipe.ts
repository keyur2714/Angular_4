import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterate'
})
export class IteratePipe implements PipeTransform {

  transform(value: any, len?: number,convertType?:string): any {
    let updateValue = '';
    for(let i=1;i<=len;i++){
      updateValue = updateValue + "," + value;
    }
    if(convertType === 'u')
      updateValue = updateValue.toUpperCase();
    else if(convertType === 'l')  
      updateValue = updateValue.toLowerCase();        
    return updateValue;
  }

}
