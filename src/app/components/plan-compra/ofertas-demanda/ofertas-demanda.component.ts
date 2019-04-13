import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandaService } from '../../../services/demanda/demanda.service';
import { Demanda } from '../../../models/demanda';
import { Oferta } from '../../../models/oferta';
import { OfertaService } from '../../../services/oferta/oferta.service';

@Component({
  selector: 'app-ofertas-demanda',
  templateUrl: './ofertas-demanda.component.html',
  styleUrls: ['./ofertas-demanda.component.css']
})
export class OfertasDemandaComponent implements OnInit {
  private demanda: Demanda = new Demanda();

  ofertas: Oferta[];
  ofertasMenores: Oferta[];

  private oferta: Oferta = new Oferta();

  constructor(private demandaService: DemandaService, private router: Router, private ofertaService: OfertaService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarDemanda();
    this.planesDemanda();
    this.planesDemandaOfertasMenores();
    // this.planesDemandaCantidad();
  }

  //Traer la demanda por id
  cargarDemanda(): void {
    this.activatedRoute.params.subscribe(params => {
      let id_demanda = params['id_demanda']
      if (id_demanda) {
        this.demandaService.getDemanda(id_demanda)
          .subscribe((demanda) => this.demanda = demanda)
      }
    })
  }

  //planes para la demanda por el nombre
  planesDemanda(): void {
    this.activatedRoute.params.subscribe(params => {
      let id_demanda = params['id_demanda']
      if (id_demanda) {
        this.ofertaService.getOfertaDemanda(id_demanda)
        .subscribe(
          (ofertasT) => {
            this.ofertas = ofertasT
          }
        )
      }
    })
  }

  //planes para la demanda con la cantidad menor a la de la demanda
  planesDemandaOfertasMenores(): void {
    this.activatedRoute.params.subscribe(params => {
      let id_demanda = params['id_demanda']
      if (id_demanda) {
        this.ofertaService.getOfertaDemandaMenores(id_demanda)
        .subscribe(
          (ofertasMenores) => {
            this.ofertasMenores = ofertasMenores
          }
        )
      }
    })
  }

  //ofertas para la demanda por cantidad
  // planesDemandaCantidad(): void {
  //   this.activatedRoute.params.subscribe(params => {
  //     let id_demanda = params['id_demanda']
  //     if (id_demanda) {
  //       this.ofertaService.getCantidadOfertaDemanda(id_demanda).subscribe(
  //         (ofertasCantidad) => {
  //           this.ofertasCantidad = ofertasCantidad
  //         }
  //       )
  //     }
  //   })
  // }


}
