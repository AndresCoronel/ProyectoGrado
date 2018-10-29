import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Demanda } from '../../models/demanda';

@Injectable({
  providedIn: 'root'
})
export class DemandaService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPoint: string = 'http://localhost:8080/api/demandas'
  
  constructor(private http: HttpClient) { }

  getDemandas(): Observable<Demanda[]>{
    return this.http.get<Demanda[]>(this.urlEndPoint);
  }

  crearDemanda(demanda: Demanda) : Observable<Demanda>{
    console.log(demanda);
    return this.http.post<Demanda>(this.urlEndPoint, demanda, {headers: this.httpHeaders});
  }

  getDemanda(id_demanda): Observable<Demanda> {
    return this.http.get<Demanda>(`${this.urlEndPoint}/${id_demanda}`);
  }
  updateDemanda(demanda: Demanda): Observable<Demanda>{
    return this.http.put<Demanda>(`${this.urlEndPoint}/${demanda.id_demanda}`,demanda, {headers: this.httpHeaders})
  }
  deleteDemanda(id_demanda: number): Observable<Demanda>{
      return this.http.delete<Demanda>(`${this.urlEndPoint}/${id_demanda}`, {headers: this.httpHeaders})
  }
}
