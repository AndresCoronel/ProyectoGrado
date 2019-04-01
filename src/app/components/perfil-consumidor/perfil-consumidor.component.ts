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
  demandas: Demanda[];
  private demanda: Demanda = new Demanda();

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
      (demandas) => { this.demandas = demandas }
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
