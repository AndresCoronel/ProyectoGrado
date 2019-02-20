import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
import { OfertaService } from '../../services/oferta/oferta.service';
import { Oferta } from '../../models/oferta';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductorService } from '../../services/productor/productor.service';
import { Productor } from '../../models/productor';
import { variable } from '@angular/compiler/src/output/output_ast';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
 lat: number = 7.1253900;
 lng: number = -73.1198000;

  ofertas: Oferta[];
  private oferta: Oferta = new Oferta();
  productores: Productor[];
  private productor: Productor = new Productor();
  variable: string = '';

  constructor(private productorService:ProductorService, private ofertaService: OfertaService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // var template = new Image();
    // $(template).load(function(){
    // $("#todo").css('backgroundImage', 'url(./../../../../assets/img/'+variable+')')
    // })
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
