import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apellidoProductor'
})
export class ApellidoProductorPipe implements PipeTransform {

  transform(ninjas: any, ape: any): any {
    //mirar si es undefined
    if(ape === undefined) return ninjas;
    //llenar el filtro nuevo
    return ninjas.filter(function(productor){
      return productor.apellido_productor.toLowerCase().includes(ape.toLowerCase());
    });
   
 }

}
