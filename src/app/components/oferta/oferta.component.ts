import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
import { OfertaService } from '../../services/oferta/oferta.service';
import { Oferta } from '../../models/oferta';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ProductorService } from '../../services/productor.service';
import { Productor } from '../../models/productor';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  

  ofertas: Oferta[];
  private oferta: Oferta = new Oferta();
  productores: Productor[];
  private productor: Productor = new Productor();
  
  constructor(private productorService:ProductorService, private ofertaService: OfertaService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarOferta();
    
  }

  cargarOferta(): void {
    this.activatedRoute.params.subscribe(params => {
      let id_oferta = params['id_oferta']
        if(id_oferta){
          this.ofertaService.getOferta(id_oferta).subscribe( (oferta) => this.oferta = oferta)
        }
      })
  }

}
