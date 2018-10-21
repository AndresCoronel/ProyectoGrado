import { Component, OnInit } from '@angular/core';
import { Consumidor } from '../../models/consumidor';
import { ConsumidorService } from '../../services/consumidor/consumidor.service';
import { Router, ActivatedRoute } from "@angular/router";
import swal from 'sweetalert2'
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private consumidor: Consumidor = new Consumidor();

  constructor(private consumidorService: ConsumidorService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarConsumidor();
  }

  cargarConsumidor(): void {
    this.activatedRoute.params.subscribe(params => {
      let cedula_consumidor = params['cedula_consumidor']
        if(cedula_consumidor){
          this.consumidorService.getConsumidor(cedula_consumidor).subscribe( (consumidor) => this.consumidor = consumidor)
        }
      })
  }

  crearConsumidor(): void {
    this.consumidorService.crearConsumidor(this.consumidor).
      subscribe(consumidor => {
        this.router.navigate(['/registro'])
        swal("Registro exitoso", `${consumidor.nombre_consumidor} registrado con éxito`, "success");
      }
      )
  }

  ActualizarConsumidor(): void {
    this.consumidorService.updateConsumidor(this.consumidor)
    .subscribe( consumidor =>{
      this.router.navigate(['/registro'])
      swal("Actualización exitosa", `${consumidor.nombre_consumidor} fue actualizado`, "success");
    }

    )
  }





}
