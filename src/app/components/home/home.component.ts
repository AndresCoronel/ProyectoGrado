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
import { TestimonioService } from '../../services/testimonio/testimonio.service';
import { Testimonio } from '../../models/testimonio';
import { ConsumidorService } from '../../services/consumidor/consumidor.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  h: string = "./../../../assets/img/PAPA.jpg"

  
  
  testimonios: Testimonio[];
  private testimonio: Testimonio= new Testimonio();

  interesados: Interesado[];
  private interesado: Interesado = new Interesado();
  
  ofertas: Oferta[];
  private oferta: Oferta = new Oferta();
  
  productores: Productor[];
  private productor: Productor = new Productor();

  consumidor: Consumidor;
  
  p: number = 1;
  o: number = 1;
  
  constructor(private ofertaService: OfertaService,private consumidorService: ConsumidorService, private interesadoService: InteresadoService, 
    private testimonioService: TestimonioService, private productorService: ProductorService, 
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.consumidor=this.consumidorService.getUserLoggedIn();
    console.log("usuario",this.consumidor)

    //MANTENER ACTIVO LOS BOTONES
    $(function() {
      var botones = $(".container button");
      botones.click(function() {
        botones.removeClass('active');
        $(this).addClass('active');
      });
    });
    //CARGAR LAS OFERTAS
    this.cargarOferta();
    this.ofertaService.getOfertas().subscribe(
      (ofertas) => { this.ofertas = ofertas  }
    )
    //CARGAR LOS PRODUCTORES
    this.cargarProductor();
    this.productorService.getProductores().subscribe(
      (productores) => { this.productores = productores }
    )
    //CARGAR LOS TESTIMONIOS
    this.testimonioService.getTestimonios().subscribe(
      (testimonios) => { this.testimonios = testimonios }
    )



  }
  //INTERESADOS
  crearInteresado(oferta: number) {
    console.log("sisas mijas",oferta)
    this.interesadoService.crearInteresado(this.interesado,this.consumidor.cedula_consumidor, oferta).subscribe(interesado => {
      swal("Marcado como interesado",  "success");
      this.router.navigate(['/principal'])
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
  //TESTIMONIOS
  crearTestimonio(): void {
    this.testimonioService.crearTestimonio(this.testimonio)
      .subscribe(testimonio => {
        swal("Testimonio publicado", "success");
        this.testimonio = new Testimonio();
        location.reload();

      })
  }
  cargarTestimonio(): void {
    this.activatedRoute.params.subscribe(params => {
      let id_testimonio = params['id_testimonio']
      if (id_testimonio) {
        this.testimonioService.getTestimonio(id_testimonio)
          .subscribe((testimonio) => this.testimonio = testimonio)
      }
    })
  }

  
}
