import { Component, OnInit } from '@angular/core';
import { DemandaService } from '../../services/demanda/demanda.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Demanda } from '../../models/demanda';
import { ConsumidorService } from '../../services/consumidor/consumidor.service';
import { Consumidor } from '../../models/consumidor';

@Component({
  selector: 'app-plan-compra',
  templateUrl: './plan-compra.component.html',
  styleUrls: ['./plan-compra.component.css']
})
export class PlanCompraComponent implements OnInit {

  demandas: Demanda[];
  consumidor: Consumidor;
  private demanda: Demanda = new Demanda();
  
  constructor(private demandaService: DemandaService, private consumidorService: ConsumidorService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.consumidor=this.consumidorService.getUserLoggedIn();

    this.cargarDemandaConsumidor();
  }

  
  cargarDemandaConsumidor(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log("en el metodo mother fuck")
      if (this.consumidor) {
        console.log("holis")
        this.demandaService.getDemandaConsumidor(this.consumidor.cedula_consumidor).subscribe(
          (demandas) => { this.demandas = demandas    
            console.log(demandas[1]) }
         
        )
      }
    })
  }


}
