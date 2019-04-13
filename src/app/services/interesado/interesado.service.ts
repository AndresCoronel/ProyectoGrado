import { Injectable } from '@angular/core';
import { Interesado } from '../../models/interesado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteresadoService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPoint: string = 'http://localhost:8080/api/interesados'
  
  constructor(private http: HttpClient) { }

  getInteresados(): Observable<Interesado[]>{
    return this.http.get<Interesado[]>(this.urlEndPoint);
   }
   crearInteresado(interesado: Interesado, consumidor:number, oferta: number) : Observable<Interesado>{
    console.log(interesado);
    return this.http.post<Interesado>(`${this.urlEndPoint}/post/${consumidor}/${oferta}`, interesado, {headers: this.httpHeaders});
  }
  getOfertaInteres(consumidor: number): Observable<Interesado[]>{
    return this.http.get<Interesado[]>(`${this.urlEndPoint}/consumidor/${consumidor}`);
  }
  getInteresado(id_interesado): Observable<Interesado> {
    return this.http.get<Interesado>(`${this.urlEndPoint}/${id_interesado}`);
  }
  updateInteresado(interesado: Interesado): Observable<Interesado>{
    return this.http.put<Interesado>(`${this.urlEndPoint}/${interesado.id_interesado}`,interesado, {headers: this.httpHeaders})
  }
  deleteInteresado(id_interesado: number): Observable<Interesado>{
      return this.http.delete<Interesado>(`${this.urlEndPoint}/${id_interesado}`, {headers: this.httpHeaders})
  }
}
