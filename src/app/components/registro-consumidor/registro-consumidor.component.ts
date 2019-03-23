import { Component, OnInit } from '@angular/core';
import { Consumidor } from '../../models/consumidor';
import { ConsumidorService } from '../../services/consumidor/consumidor.service';
import { Router, ActivatedRoute } from "@angular/router";
import swal from 'sweetalert2'
import $ from 'jquery'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

export interface Sexo {
  value: string;
  sexo: string;
}
@Component({
  selector: 'app-registro-consumidor',
  templateUrl: './registro-consumidor.component.html',
  styleUrls: ['./registro-consumidor.component.css']
})
export class RegistroConsumidorComponent implements OnInit {
  sexos: Sexo[] = [
    { value: 'Hombre', sexo: 'Hombre' },
    { value: 'Mujer', sexo: 'Mujer' }
  ];

  habilitar: boolean= true;
  consumidores: Consumidor[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  private consumidor: Consumidor = new Consumidor();
  constructor(private consumidorService: ConsumidorService, private router: Router,
    private activatedRoute: ActivatedRoute,  private _formBuilder: FormBuilder) { }

  ngOnInit() {
    $('input').focus(function(){
      $(this).parents('.form-group').addClass('focused');
    });
    
    $('input').blur(function(){
      var inputValue = $(this).val();
      if ( inputValue == "" ) {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');  
      } else {
        $(this).addClass('filled');
      }
    });
    this.firstFormGroup = this._formBuilder.group({
      nombreCtrl: ['', Validators.required],
      apellidoCtrl: ['', Validators.required],
      sexoCtrl: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      correoCtrl: ['', Validators.required]
    }); 
    this.thirdFormGroup = this._formBuilder.group({
      telefonoCtrl: ['', Validators.required]
    });  
    this.fourthFormGroup = this._formBuilder.group({
      usuarioCtrl:['', Validators.required],
      contraseniaCtrl:['', Validators.required]
    });  
   


    this.cargarConsumidor();
    
    this.consumidorService.getConsumidores().subscribe(
      (consumidores) => { this.consumidores = consumidores }
    );
    
  }
  cargarConsumidor(): void {
    this.activatedRoute.params.subscribe(params => {
      let cedula_consumidor = params['cedula_consumidor']
        if(cedula_consumidor){
          this.consumidorService.getConsumidor(cedula_consumidor)
          .subscribe( (consumidor) => this.consumidor = consumidor)
        }
      })
  }

  crearConsumidor(): void {
    this.consumidorService.crearConsumidor(this.consumidor).
      subscribe(consumidor => {
        this.router.navigate(['/inicioSesion'])
        swal("Registro exitoso", `${consumidor.nombre_consumidor} registrado con éxito`, "success");
        this.consumidor = new Consumidor();
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
  setHabilitar(): void {
    this.habilitar = (this.habilitar == true)? false: true
  }

  eliminarConsumidor(consumidor: Consumidor){
    swal({
      title: '¿Está seguro?',
      text:`Seguro que quiere eliminar a ${consumidor.nombre_consumidor}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'No, cancelar',
      confirmButtonText: 'Si,eliminar'
    }).then((result) => {
      if (result.value) {
        this.consumidorService.deleteConsumidor(consumidor.cedula_consumidor)
        .subscribe( response =>{
          this.consumidores = this.consumidores.filter(con => con !== consumidor);
        swal(
          'Usuario eliminado',
          `${consumidor.nombre_consumidor} eliminado con éxito`,
          'success'
        )
      })
      }
    })

  }

}
