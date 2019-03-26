import { Component, OnInit } from '@angular/core';
import { Productor } from '../../../models/productor';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductorService } from '../../../services/productor/productor.service';
import { OfertaService } from '../../../services/oferta/oferta.service';
import { Oferta } from '../../../models/oferta';

@Component({
  selector: 'app-perfil-productor',
  templateUrl: './perfil-productor.component.html',
  styleUrls: ['./perfil-productor.component.css']
})
export class PerfilProductorComponent implements OnInit {

  private productor: Productor = new Productor();
  ofertas: Oferta[];

  constructor(private productorService: ProductorService,
    private router: Router, private activatedRoute: ActivatedRoute, private ofertaService: OfertaService) { }

  ngOnInit() {
    this.cargarProductor();
    this.cargarOfertaProductor();
  }
  //TRAER PRODUCTOR POR CEDULA
  cargarProductor(): void {
    this.activatedRoute.params.subscribe(params => {
      let cedula_productor = params['cedula_productor']
      console.log("productor-><<<<<<<<<<<", cedula_productor)
      if (cedula_productor) {
        this.productorService.getProductor(cedula_productor)
          .subscribe((productor) => this.productor = productor)
      }
    })
  }

  cargarOfertaProductor(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log("en el metodo mother fuck")
      let cedula_productor = params['cedula_productor']
      console.log("epaleeeeeeeeeeeeeeeeeee**21122112***********************", cedula_productor)
      if (cedula_productor) {
        console.log("holis")
        this.ofertaService.getOfertaProductor(cedula_productor).subscribe(
          (ofertas) => { this.ofertas = ofertas
            console.log(ofertas[1]) }
         
        )
      }
    })
  }

}
