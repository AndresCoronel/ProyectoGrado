import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../../services/oferta/oferta.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Oferta } from '../../models/oferta';
import $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  habilitarTodas: boolean= true;
  habilitarProductor: boolean= false;
  habilitarZona: boolean= false;
  habilitarProducto: boolean= false;
  habilitarFecha: boolean= false;
  habilitarCantidad: boolean= false;
  habilitarPrecio: boolean= false;
  h: string = "./../../../assets/img/PAPA.jpg"

  ofertas: Oferta[];
  private oferta: Oferta = new Oferta();
  constructor(private ofertaService: OfertaService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var carousel = $(".carousel"),
      currdeg = 0;

    $(".next").on("click", { d: "n" }, rotate);
    $(".prev").on("click", { d: "p" }, rotate);

    function rotate(e) {
      if (e.data.d == "n") {
        currdeg = currdeg - 60;
      }
      if (e.data.d == "p") {
        currdeg = currdeg + 60;
      }
      carousel.css({
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)",
        "transform": "rotateY(" + currdeg + "deg)"
      });
    }
    
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
  setHabilitarTodas(): void {
    this.habilitarTodas = true;
    this.habilitarProductor = false;
    this.habilitarProducto= false;
    this.habilitarZona = false;
    this.habilitarFecha = false; 
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }

  setHabilitarProductor(): void {
    this.habilitarTodas = false;
    this.habilitarProductor = true
    this.habilitarProducto= false;
    this.habilitarZona = false;
    this.habilitarFecha = false; 
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }

  setHabilitarZona(): void {
    this.habilitarTodas = false;
    this.habilitarZona = true
    this.habilitarProducto= false;
    this.habilitarProductor= false;
    this.habilitarFecha = false; 
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }
  setHabilitarProducto(): void {
    this.habilitarTodas = false;
    this.habilitarProducto = true;
    this.habilitarProductor= false;
    this.habilitarZona = false;
    this.habilitarFecha = false; 
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }
  setHabilitarFecha(): void {
    this.habilitarTodas = false;
    this.habilitarFecha = true
    this.habilitarProducto= false;
    this.habilitarProductor= false;
    this.habilitarZona = false;
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }
  setHabilitarCantidad(): void {
    this.habilitarTodas = false;
    this.habilitarCantidad = true
    this.habilitarProducto= false;
    this.habilitarProductor= false;
    this.habilitarZona = false;
    this.habilitarFecha = false; 
    this.habilitarPrecio = false;
  }
  setHabilitarPrecio(): void {
    this.habilitarTodas = false;
    this.habilitarPrecio = true
    this.habilitarProducto= false;
    this.habilitarProductor= false;
    this.habilitarZona = false;
    this.habilitarFecha = false; 
    this.habilitarCantidad = false;
  }
}
