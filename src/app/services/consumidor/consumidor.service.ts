import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Consumidor } from '../../models/consumidor';
import { Observable } from "rxjs";
import {of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPoint: string = 'http://localhost:8080/api/consumidores'
  private isUserLoggedIn;
  public usserLogged:Consumidor;

  constructor(private http: HttpClient) { 
    this.isUserLoggedIn = false;
  }


  setUserLoggedIn(consumidor:Consumidor) {
    this.isUserLoggedIn = true;
    this.usserLogged = consumidor;
    console.log("llego aqui", this.isUserLoggedIn)
    localStorage.setItem('currentUser', JSON.stringify(consumidor));
  
  }
  setUserLoggedOut() {
    this.isUserLoggedIn = false;
    this.usserLogged = new Consumidor;
    console.log("llego aqui", this.isUserLoggedIn)
    localStorage.clear();
    
    console.log(localStorage)
  
  }

  getUserLoggedIn() {
  	return JSON.parse(localStorage.getItem('currentUser'));
  }


  getConsumidores(): Observable<Consumidor[]>{
    //return of(consumidores);
    return this.http.get<Consumidor[]>(this.urlEndPoint);
    //.pipe(
      /*map((response) => response as Consumidor[])
    )*/
  }

  crearConsumidor(consumidor: Consumidor) : Observable<Consumidor>{
    return this.http.post<Consumidor>(this.urlEndPoint, consumidor, {headers: this.httpHeaders});
  }

  getConsumidor(cedula_consumidor): Observable<Consumidor> {
    return this.http.get<Consumidor>(`${this.urlEndPoint}/${cedula_consumidor}`);
  }
  updateConsumidor(consumidor: Consumidor): Observable<Consumidor>{
    return this.http.put<Consumidor>(`${this.urlEndPoint}/${consumidor.cedula_consumidor}`,consumidor, {headers: this.httpHeaders})
  }
  deleteConsumidor(cedula_consumidor: number): Observable<Consumidor>{
      return this.http.delete<Consumidor>(`${this.urlEndPoint}/${cedula_consumidor}`, {headers: this.httpHeaders})
  }

  traerConsumidorSesion(correo_consumidor, contrasenia_consumidor) : Observable<Consumidor>{
    return this.http.post<Consumidor>(`${this.urlEndPoint}/buscar/${correo_consumidor}/${contrasenia_consumidor}`, {headers: this.httpHeaders});
  }
}
