import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { Oferta } from '../../models/oferta';
@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPoint: string = 'http://localhost:8080/api/ofertas';
  private urlEndPoint2: string = 'http://localhost:8080/api/ofertas/productor';
  private urlEndPoint3: string = 'http://localhost:8080/api/ofertas/demanda';
   
  constructor(private http: HttpClient) { }


  getOfertas(): Observable<Oferta[]>{
    return this.http.get<Oferta[]>(this.urlEndPoint);
  }

  crearOferta(oferta: Oferta) : Observable<Oferta>{
    return this.http.post<Oferta>(this.urlEndPoint, oferta, {headers: this.httpHeaders});
  }

  getOferta(id_oferta): Observable<Oferta> {
    return this.http.get<Oferta>(`${this.urlEndPoint}/${id_oferta}`);
  }
  updateOferta(oferta: Oferta): Observable<Oferta>{
    return this.http.put<Oferta>(`${this.urlEndPoint}/${oferta.id_oferta}`,oferta, {headers: this.httpHeaders})
  }
  deleteOferta(id_oferta: number): Observable<Oferta>{
      return this.http.delete<Oferta>(`${this.urlEndPoint}/${id_oferta}`, {headers: this.httpHeaders})
  }
  getOfertaProductor(productor: number): Observable<Oferta[]>{
    return this.http.get<Oferta[]>(`${this.urlEndPoint2}/${productor}`);
  }
 
  getOfertaDemanda(demanda: number): Observable<Oferta[]>{
    return this.http.get<Oferta[]>(`${this.urlEndPoint}/demanda/exacto/${demanda}`);
  }
  getOfertaDemandaMenores(demanda: number): Observable<Oferta[]>{
    return this.http.get<Oferta[]>(`${this.urlEndPoint}/demanda/menores/${demanda}`);
  }
  getCantidadOfertaDemanda(demanda: number): Observable<Oferta[]>{
    return this.http.get<Oferta[]>(`${this.urlEndPoint}/demanda/cantidad/${demanda}`);
  }
  


}
