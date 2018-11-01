import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DemandaService } from '../../services/demanda/demanda.service';
import { Demanda } from '../../models/demanda';
import { ConsumidorService } from '../../services/consumidor/consumidor.service';
import { Consumidor } from '../../models/consumidor';
import { Oferta } from '../../models/oferta';
import { OfertaService } from '../../services/oferta/oferta.service';

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
  ofertas: Oferta[];
  private oferta: Oferta = new Oferta();
  consumidores: Consumidor[];
  private consumidor: Consumidor = new Consumidor();
  demandass: Demanda[];
  private demanda: Demanda = new Demanda();
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

  ofertas1: Ofertas[] = [
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

  constructor(private demandaService: DemandaService, private router: Router,
    private activatedRoute: ActivatedRoute, private consumidorService: ConsumidorService,
    private ofertaService: OfertaService) { }
  ngOnInit() {
    this.ofertaService.getOfertas().subscribe(
      (ofertas) => { this.ofertas = ofertas}
    )

    this.consumidorService.getConsumidores().subscribe(
      (consumidores) => { this.consumidores = consumidores }
    );
    this.demandaService.getDemandas().subscribe(
      (demandass) => { this.demandass = demandass }
    );
  }

  cargarConsumidor(): void {
    this.activatedRoute.params.subscribe(params => {
      let cedula_consumidor = params['cedula_consumidor']
        if(cedula_consumidor){
          this.consumidorService.getConsumidor(cedula_consumidor)
          .subscribe( (consumidor) => this.consumidor = consumidor)
        }
      })
  }

  cargarDemandas(): void {
    this.activatedRoute.params.subscribe(params => {
      let id_demanda = params['id_demanda']
        if(id_demanda){
          this.demandaService.getDemanda(id_demanda)
          .subscribe( (demanda) => this.demanda = demanda)
        }
      })
  }

}
