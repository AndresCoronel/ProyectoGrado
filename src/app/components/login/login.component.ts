import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Consumidor } from '../../models/consumidor';
import { BarraNavegacionComponent } from '../barra-navegacion/barra-navegacion.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    visible: boolean = false;
    consumidor: Consumidor=new Consumidor();
    errorMessage:string;
    constructor(private router: Router) { }
  
  
  
    ngOnInit() {
    }

    @ViewChild(BarraNavegacionComponent) barra: BarraNavegacionComponent;
    iniciarSesion(){
      this.barra.cambiarEstado();
      console.log("iniciosESION")
    }
}
