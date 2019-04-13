import { Component } from '@angular/core';
import { Consumidor } from './models/consumidor';
import { Router, ActivatedRoute } from '../../node_modules/@angular/router';
import { ConsumidorService } from './services/consumidor/consumidor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  consumidor: Consumidor[];
  title = 'Sistema de información agrícola';
  static API_URL = "http://localhost:8080/api";
  constructor(private router: Router, private consumidorService: ConsumidorService,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.consumidor=this.consumidorService.getUserLoggedIn();
  }


}