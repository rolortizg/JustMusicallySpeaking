import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizr'
})
export class CapitalizrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('')[0].toUpperCase() + value.substring(1)
  }

}

