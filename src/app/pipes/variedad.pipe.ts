import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'variedad'
})
export class VariedadPipe implements PipeTransform {

  transform(variedades: any, vari: any): any {
    //mirar si es undefined
    if(vari === undefined) return variedades;
    //llenar el filtro nuevo
    return variedades.filter(function(variedad){
      return variedad.lugar_oferta.toLowerCase().includes(vari.toLowerCase());
    });
  }

}
