import { Injectable } from '@angular/core';
import { Productor } from '../../models/productor';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductorService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPoint: string = 'http://localhost:8080/api/productores'
  constructor(private http: HttpClient) { }


  getProductores(): Observable<Productor[]>{
    //return of(consumidores);
    return this.http.get<Productor[]>(this.urlEndPoint);
    //.pipe(
      /*map((response) => response as Consumidor[])
    )*/
  } 

  getProductor(cedula_productor): Observable<Productor> {
    return this.http.get<Productor>(`${this.urlEndPoint}/${cedula_productor}`);
  }
}
