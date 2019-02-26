import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../../services/oferta/oferta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Oferta } from '../../models/oferta';
import $ from 'jquery';
import swal from 'sweetalert2'
import { InteresadoService } from '../../services/interesado/interesado.service';
import { Interesado } from '../../models/interesado';
import { Consumidor } from '../../models/consumidor';
import { Productor } from '../../models/productor';
import { ProductorService } from '../../services/productor/productor.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  habilitarTodas: boolean = true;
  habilitarProductor: boolean = false;
  habilitarZona: boolean = false;
  habilitarProducto: boolean = false;
  habilitarFecha: boolean = false;
  habilitarCantidad: boolean = false;
  habilitarPrecio: boolean = false;
  h: string = "./../../../assets/img/PAPA.jpg"

  interesados: Interesado[];
  private interesado: Interesado = new Interesado();
  ofertas: Oferta[];
  private oferta: Oferta = new Oferta();
  productores: Productor[];
  private productor: Productor = new Productor();
  p: number = 1;
  constructor(private ofertaService: OfertaService, private interesadoService: InteresadoService,
    private productorService: ProductorService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    //CARGAR LAS OFERTAS
    this.cargarOferta();
    this.ofertaService.getOfertas().subscribe(
      (ofertas) => { this.ofertas = ofertas }
    )
    //CARGAR LOS PRODUCTORES
    this.cargarProductor();
    this.productorService.getProductores().subscribe(
      (productores) => { this.productores = productores }
    )
  }
  //INTERESADOS
  crearInteresado(oferta: Oferta) {
    console.log(oferta)
    this.interesadoService.crearInteresado(this.interesado)
      .subscribe(interesado => {
        //this.router.navigate(['/principal'])
        swal("Marcado Correctamente", "success");
        this.interesado = new Interesado();
      })
  }

  //OFERTAS
  cargarOferta(): void {
    this.activatedRoute.params.subscribe(params => {
      let id_oferta = params['id_oferta']
      if (id_oferta) {
        this.ofertaService.getOferta(id_oferta)
          .subscribe((oferta) => this.oferta = oferta)
      }
    })
  }
  //PRODUCTORES
  cargarProductor(): void {
    this.activatedRoute.params.subscribe(params => {
      let cedula_productor = params['cedula_productor']
      if (cedula_productor) {
        this.productorService.getProductor(cedula_productor)
          .subscribe((productor) => this.productor = productor)
      }
    })
  }
  //BANDERAS PARA BOTONES DE FILTROS
  setHabilitarTodas(): void {
    this.habilitarTodas = true;
    this.habilitarProductor = false;
    this.habilitarProducto = false;
    this.habilitarZona = false;
    this.habilitarFecha = false;
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }
  setHabilitarProductor(): void {
    this.habilitarTodas = false;
    this.habilitarProductor = true
    this.habilitarProducto = false;
    this.habilitarZona = false;
    this.habilitarFecha = false;
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }
  setHabilitarZona(): void {
    this.habilitarTodas = false;
    this.habilitarZona = true
    this.habilitarProducto = false;
    this.habilitarProductor = false;
    this.habilitarFecha = false;
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }
  setHabilitarProducto(): void {
    this.habilitarTodas = false;
    this.habilitarProducto = true;
    this.habilitarProductor = false;
    this.habilitarZona = false;
    this.habilitarFecha = false;
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }
  setHabilitarFecha(): void {
    this.habilitarTodas = false;
    this.habilitarFecha = true
    this.habilitarProducto = false;
    this.habilitarProductor = false;
    this.habilitarZona = false;
    this.habilitarCantidad = false;
    this.habilitarPrecio = false;
  }
  setHabilitarCantidad(): void {
    this.habilitarTodas = false;
    this.habilitarCantidad = true
    this.habilitarProducto = false;
    this.habilitarProductor = false;
    this.habilitarZona = false;
    this.habilitarFecha = false;
    this.habilitarPrecio = false;
  }
  setHabilitarPrecio(): void {
    this.habilitarTodas = false;
    this.habilitarPrecio = true
    this.habilitarProducto = false;
    this.habilitarProductor = false;
    this.habilitarZona = false;
    this.habilitarFecha = false;
    this.habilitarCantidad = false;
  }
}
