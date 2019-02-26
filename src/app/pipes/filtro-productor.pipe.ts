import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProductor'
})
export class FiltroProductorPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
     //mirar si es undefined
     if(term === undefined) return ninjas;
     //llenar el filtro nuevo
     return ninjas.filter(function(productor){
       return productor.nombre_productor.toLowerCase().includes(term.toLowerCase());
     });
    
  }

}
