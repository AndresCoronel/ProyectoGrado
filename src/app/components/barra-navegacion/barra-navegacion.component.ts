import { Component, OnInit } from '@angular/core';
import { Consumidor } from '../../models/consumidor';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ConsumidorService } from '../../services/consumidor/consumidor.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  visible: boolean= true;
  vis: string;
  errorMessage: string;
  consumidor: Consumidor;
  constructor(private router: Router, private consumidorService: ConsumidorService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    
    this.consumidor=this.consumidorService.getUserLoggedIn();
  }


  cerrarSesion(){
    console.log("cerrar")
    this.consumidorService.setUserLoggedOut();


  }
 

}
