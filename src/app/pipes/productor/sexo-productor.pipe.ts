import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexoProductor'
})
export class SexoProductorPipe implements PipeTransform {

  transform(ninjas: any, sex: any): any {
    //mirar si es undefined
    if(sex === undefined) return ninjas;
    //llenar el filtro nuevo
    return ninjas.filter(function(productor){
      return productor.sexo_productor.toLowerCase().includes(sex.toLowerCase());
    });
   
 }

}
