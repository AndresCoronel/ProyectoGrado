import { Component, OnInit } from '@angular/core';
import { Demanda } from '../../models/demanda';
import { Router, ActivatedRoute } from "@angular/router";
import { DemandaService } from '../../services/demanda/demanda.service';
import swal from 'sweetalert2'
import $ from 'jquery'
@Component({
  selector: 'app-demanda',
  templateUrl: './demanda.component.html',
  styleUrls: ['./demanda.component.css']
})
export class DemandaComponent implements OnInit {
  
  demandas: Demanda[];
  private demanda: Demanda = new Demanda();
  constructor(private demandaService: DemandaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

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
    })  
    
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
    this.demandaService.crearDemanda(this.demanda)
    .subscribe(demanda =>{
      this.router.navigate(['/demanda'])
      swal("Demanda publicada", `${demanda.nombre_producto} Publicada con éxito`, "success");
        this.demanda = new Demanda();
    })
  }

  ActualizarDemanda(): void {
    this.demandaService.updateDemanda(this.demanda)
    .subscribe( demanda =>{
      this.router.navigate(['/registro'])
      swal("Actualización exitosa", `${demanda.nombre_producto} fue actualizado`, "success");
    })
  }


  eliminarDemanda(demanda: Demanda){
    swal({
      title: '¿Está seguro?',
      text:`Seguro que quiere eliminar a ${demanda.nombre_producto}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'No, cancelar',
      confirmButtonText: 'Si,eliminar'
    }).then((result) => {
      if (result.value) {
        this.demandaService.deleteDemanda(demanda.id_demanda)
        .subscribe( response =>{
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
