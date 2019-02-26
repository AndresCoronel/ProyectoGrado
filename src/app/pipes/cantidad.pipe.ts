import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantidad'
})
export class CantidadPipe implements PipeTransform {

  transform(cantidades: any, can: number): any {
    //mirar si es undefined
    if(can === undefined) return cantidades;
    //llenar el filtro nuevo
    return cantidades.filter(function(cantidad){
      return cantidad.cantidad_producto.toFixed().includes(can.toString());
    });
  }

}
