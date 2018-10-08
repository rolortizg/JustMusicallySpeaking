import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imagenes: any[]): string {

    if (!imagenes || imagenes.length < 1){
      return 'assets/img/noimage.png';
    
    } else {
      return imagenes[0].url;
    }
  }
}
