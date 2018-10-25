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
  sal(id_oferta: string) {
    console.log(id_oferta)
    this.router.navigate(['/oferta'])
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
  

}
