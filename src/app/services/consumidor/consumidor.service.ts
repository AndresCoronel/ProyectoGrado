import { Injectable } from '@angular/core';
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
  
  constructor(private http: HttpClient) { }

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
}
