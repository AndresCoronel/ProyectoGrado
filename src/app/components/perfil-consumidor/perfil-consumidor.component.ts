import { Component, OnInit } from '@angular/core';

export interface Demandas {
  name: string;
  updated: Date;
}
export interface Ofertas {
  nombre: string;
  productor: string;
  descripcion:string;
}
@Component({
  selector: 'app-perfil-consumidor',
  templateUrl: './perfil-consumidor.component.html',
  styleUrls: ['./perfil-consumidor.component.css']
})
export class PerfilConsumidorComponent implements OnInit {


  demandas: Demandas[] = [
    {
      name: 'Demanda 1',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Demanda 2',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Demanda 3',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Demanda 4',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Demanda 5',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Demanda 6',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Demanda 7',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Demanda 8',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Demanda 9',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Demanda 10',
      updated: new Date('1/28/16'),
    }
  ];

  ofertas: Ofertas[] = [
    {
      nombre: 'Demanda 1',
      productor: 'Edwin Guerrero',
      descripcion: 'Esta es la descripción temporal para todas las ofertas, se espera que el maximo de esta descripción sea de 120 palabras para mantener la estrucutra de las tarjetas',
    },
    {
      nombre: 'Demanda 2',
      productor: 'Edwin Guerrero',
      descripcion: 'Esta es la descripción temporal para todas las ofertas, se espera que el maximo de esta descripción sea de 120 palabras para mantener la estrucutra de las tarjetas',
    },
    {
      nombre: 'Demanda 3',
      productor: 'Edwin Guerrero',
      descripcion: 'Esta es la descripción temporal para todas las ofertas, se espera que el maximo de esta descripción sea de 120 palabras para mantener la estrucutra de las tarjetas',
    },
    {
      nombre: 'Demanda 4',
      productor: 'Edwin Guerrero',
      descripcion: 'Esta es la descripción temporal para todas las ofertas, se espera que el maximo de esta descripción sea de 120 palabras para mantener la estrucutra de las tarjetas',
    },
    {
      nombre: 'Demanda 5',
      productor: 'Edwin Guerrero',
      descripcion: 'Esta es la descripción temporal para todas las ofertas, se espera que el maximo de esta descripción sea de 120 palabras para mantener la estrucutra de las tarjetas',
    },
    {
      nombre: 'Demanda 6',
      productor: 'Edwin Guerrero',
      descripcion: 'Esta es la descripción temporal para todas las ofertas, se espera que el maximo de esta descripción sea de 120 palabras para mantener la estrucutra de las tarjetas',
    },
    {
      nombre: 'Demanda 6',
      productor: 'Edwin Guerrero',
      descripcion: 'Esta es la descripción temporal para todas las ofertas, se espera que el maximo de esta descripción sea de 120 palabras para mantener la estrucutra de las tarjetas',
    },
    {
      nombre: 'Demanda 7',
      productor: 'Edwin Guerrero',
      descripcion: 'Esta es la descripción temporal para todas las ofertas, se espera que el maximo de esta descripción sea de 120 palabras para mantener la estrucutra de las tarjetas',
    },
    {
      nombre: 'Demanda 8',
      productor: 'Edwin Guerrero',
      descripcion: 'Esta es la descripción temporal para todas las ofertas, se espera que el maximo de esta descripción sea de 120 palabras para mantener la estrucutra de las tarjetas',
    },
    {
      nombre: 'Demanda 9',
      productor: 'Edwin Guerrero',
      descripcion: 'Esta es la descripción temporal para todas las ofertas, se espera que el maximo de esta descripción sea de 120 palabras para mantener la estrucutra de las tarjetas',
    }
  ];

  constructor() { }
  ngOnInit() {
  }

}
