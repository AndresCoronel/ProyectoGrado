import { Component, OnInit } from '@angular/core';
import { Productor } from '../../../models/productor';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductorService } from '../../../services/productor/productor.service';

@Component({
  selector: 'app-perfil-productor',
  templateUrl: './perfil-productor.component.html',
  styleUrls: ['./perfil-productor.component.css']
})
export class PerfilProductorComponent implements OnInit {

  private productor: Productor = new Productor();

  constructor(private productorService: ProductorService, 
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarProductor();
  }
  //TRAER PRODUCTOR POR CEDULA
  cargarProductor(): void {
    this.activatedRoute.params.subscribe(params => {
      let cedula_productor = params['cedula_productor']
      if (cedula_productor) {
        this.productorService.getProductor(cedula_productor)
          .subscribe((productor) => this.productor = productor)
      }
    })
  }
}
