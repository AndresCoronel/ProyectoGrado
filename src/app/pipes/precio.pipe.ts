import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  transform(precios: any, pre: number): any {
    //mirar si es undefined
    if(pre === undefined) return precios;
    //llenar el filtro nuevo
    return precios.filter(function(precio){
      return precio.precio_producto.toFixed().includes(pre.toString());
    });
  }


}
