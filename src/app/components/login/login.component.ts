import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Consumidor } from '../../models/consumidor';
import { BarraNavegacionComponent } from '../barra-navegacion/barra-navegacion.component';
import { ConsumidorService } from '../../services/consumidor/consumidor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  visible: boolean = false;
  consumidor: Consumidor = new Consumidor();
  errorMessage: string;
  constructor(private router: Router, private consumidorService: ConsumidorService,
    private activatedRoute: ActivatedRoute) { }

  Consumidores: Consumidor[];
  private Consumidor: Consumidor = new Consumidor();

  ngOnInit() {
  }

  logIn(correo_consumidor: string, contrasenia_consumidor: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    console.log(correo_consumidor, contrasenia_consumidor)
    // Calls service to login user to the api rest
    this.consumidorService.traerConsumidorSesion(correo_consumidor, contrasenia_consumidor)
      .subscribe((consumidor) => {
      this.consumidor = consumidor
        this.consumidorService.setUserLoggedIn(consumidor);
      })


    this.router.navigate(['/principal'])

  }





  traerConsumidor(): void {
    this.activatedRoute.params.subscribe(params => {
      let correo_consumidor = params['correo_consumidor']
      let contrasenia_consumidor = params['contrasenia_consumidor']
      if (correo_consumidor & contrasenia_consumidor) {
        this.consumidorService.traerConsumidorSesion(correo_consumidor, contrasenia_consumidor)
          .subscribe((consumidor) => this.consumidor = consumidor)
      }
    })

    console.log("iniciar sesion")

  }
}
