import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../../services/oferta/oferta.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Oferta } from '../../models/oferta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  habilitarProductor: boolean= false;
  habilitarZona: boolean= false;
  habilitarProducto: boolean= false;
  habilitarFecha: boolean= false;
  habilitarCantidad: boolean= false;
  habilitarPrecio: boolean= false;


  ofertas: Oferta[];
  private oferta: Oferta = new Oferta();
  constructor(private ofertaService: OfertaService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarOferta();

   this.ofertaService.getOfertas().subscribe(
     (ofertas) => { this.ofertas = ofertas}
   )
    
  }

  cargarOferta(): void {
    this.activatedRoute.params.subscribe(params => {
      let id_oferta = params['id_oferta']
        if(id_oferta){
          this.ofertaService.getOferta(id_oferta)
          .subscribe( (oferta) => this.oferta = oferta)
        }
      })
  }
  
  setHabilitarProductor(): void {
    this.habilitarProductor = true
    this.habilitarProducto= false;
    this.habilitarZona = false;
    this.habilitarFecha = false; 
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }

  setHabilitarZona(): void {
    this.habilitarZona = true
    this.habilitarProducto= false;
    this.habilitarProductor= false;
    this.habilitarFecha = false; 
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }
  setHabilitarProducto(): void {
    this.habilitarProducto = true

    this.habilitarProductor= false;
    this.habilitarZona = false;
    this.habilitarFecha = false; 
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }
  setHabilitarFecha(): void {
    this.habilitarFecha = true
    this.habilitarProducto= false;
    this.habilitarProductor= false;
    this.habilitarZona = false;
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }
  setHabilitarCantidad(): void {
    this.habilitarCantidad = true
    this.habilitarProducto= false;
    this.habilitarProductor= false;
    this.habilitarZona = false;
    this.habilitarFecha = false; 
    this.habilitarPrecio = false;
  }
  setHabilitarPrecio(): void {
    this.habilitarPrecio = true
    this.habilitarProducto= false;
    this.habilitarProductor= false;
    this.habilitarZona = false;
    this.habilitarFecha = false; 
    this.habilitarCantidad = false;
  }
}
