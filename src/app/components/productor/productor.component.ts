import { Component, OnInit } from '@angular/core';
import { ProductorService } from '../../services/productor/productor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Productor } from '../../models/productor';

@Component({
  selector: 'app-productor',
  templateUrl: './productor.component.html',
  styleUrls: ['./productor.component.css']
})
export class ProductorComponent implements OnInit { 
  
  productores: Productor[];
  private productor: Productor = new Productor();

  constructor(private productorService: ProductorService, 
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarProductor();
    this.productorService.getProductores().subscribe(
      (productores) => { this.productores = productores }
    )
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
