import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Ciudad } from '../../models/ciudad';
@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPoint: string = 'http://localhost:8080/api/ciudades'
  
  
  constructor(private http: HttpClient) { }

  getCiudades(): Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(this.urlEndPoint);
  }

  getCiudad(id_ciudad): Observable<Ciudad> {
    return this.http.get<Ciudad>(`${this.urlEndPoint}/${id_ciudad}`);
  }

}
