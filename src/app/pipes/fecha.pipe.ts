import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(fechas: any, fec: number): any {
    //mirar si es undefined
    if(fec === undefined) return fechas;
    //llenar el filtro nuevo
    return fechas.filter(function(fecha){
      return fecha.fecha_recoleccion_oferta.toFixed().includes(fec.toString());
    });
  }

}
