import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zona'
})
export class ZonaPipe implements PipeTransform {

  transform(ninjas: any, zon: any): any {
    //mirar si es undefined
    if(zon === undefined) return ninjas;
    //llenar el filtro nuevo
    return ninjas.filter(function(ninja){
      return ninja.lugar_oferta.toLowerCase().includes(zon.toLowerCase());
    });
  }

}
