import { Component, OnInit } from '@angular/core';
import { Demanda } from '../../models/demanda';
import { Router, ActivatedRoute } from "@angular/router";
import { DemandaService } from '../../services/demanda/demanda.service';
import swal from 'sweetalert2'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Consumidor } from '../../models/consumidor';
import { ConsumidorService } from '../../services/consumidor/consumidor.service';

export interface Medida {
  value: string;
  tipoMedida: string;
}

@Component({
  selector: 'app-demanda',
  templateUrl: './demanda.component.html',
  styleUrls: ['./demanda.component.css'],
})
export class DemandaComponent implements OnInit {
  
  demandas: Demanda[];
  private demanda: Demanda = new Demanda();
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  medidas: Medida[] = [
    { value: 'Kilogramo-0', tipoMedida: 'Kilogramo' },
    { value: 'Bulto-1', tipoMedida: 'Bulto' },
    { value: 'Arroba-2', tipoMedida: 'Arroba' },
    { value: 'Canastilla-3', tipoMedida: 'Canastilla' },
    { value: 'Tonelada-4', tipoMedida: 'Tonelada' },
  ];

  consumidor: Consumidor;
  consumidorAc: Consumidor;

  constructor(private demandaService: DemandaService, private router: Router,
    private activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder,private consumidorService: ConsumidorService) { }

  ngOnInit() {


    this.consumidor=this.consumidorService.getUserLoggedIn();


    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(coords);
      console.log("jay", navigator.geolocation.getCurrentPosition(coords))
}else{
      // El navegador no soporta la geolicalización
}

function coords(position){
}
    this.demandaService.getDemandas().subscribe((demandas) => {
      this.demandas = demandas
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      medidaControl:['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      departamentoCtrl: ['', Validators.required],
      ciudadCtrl:['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      descripcionCtrl: ['', Validators.required]
    });
  }
  
  cargarDemanda(): void {
    
    this.activatedRoute.params.subscribe(params => {
      let id_demanda = params['id_demanda'];
      if (id_demanda) {
        this.demandaService.getDemanda(id_demanda)
          .subscribe((demanda) => this.demanda = demanda)
      }
    })
  }

  crearDemanda(): void {
    this.demandaService.crearDemanda(this.demanda, this.consumidor.cedula_consumidor)
      .subscribe(demanda => {
        this.router.navigate(['/principal'])
        swal("Demanda publicada", `${demanda.nombre_producto} Publicada con éxito`, "success");
        this.demanda = new Demanda();
      })
  }

  ActualizarDemanda(): void {
    this.demandaService.updateDemanda(this.demanda)
      .subscribe(demanda => {
        this.router.navigate(['/registro'])
        swal("Actualización exitosa", `${demanda.nombre_producto} fue actualizado`, "success");
      })
  }


  eliminarDemanda(demanda: Demanda) {
    swal({
      title: '¿Está seguro?',
      text: `Seguro que quiere eliminar a ${demanda.nombre_producto}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'No, cancelar',
      confirmButtonText: 'Si,eliminar'
    }).then((result) => {
      if (result.value) {
        this.demandaService.deleteDemanda(demanda.id_demanda)
          .subscribe(response => {
            this.demandas = this.demandas.filter(con => con !== demanda);
            swal(
              'Usuario eliminado',
              `${demanda.nombre_producto} eliminado con éxito`,
              'success'
            )
          })
      }
    })

  }



}
