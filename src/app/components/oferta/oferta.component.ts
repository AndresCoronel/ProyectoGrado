import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
import { OfertaService } from '../../services/oferta/oferta.service';
import { Oferta } from '../../models/oferta';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  

  ofertas: Oferta[];
  private oferta: Oferta = new Oferta();
  constructor(private ofertaService: OfertaService, private router: Router,
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
