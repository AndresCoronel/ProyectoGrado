import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {

  // Pie
  public pieChartLabels:string[] = ['Nariño', 'Santander', 'Tolima', 'Quindio', 'Norte de santander'];
  public pieChartData:number[] = [40, 20, 20,10,10];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public generarDatos(){
    this.pieChartData=[
      Math.random()*100,
      Math.random()*100,
      Math.random()*100,
      Math.random()*100,
      Math.random()*100
    ]
  }

}
