import { Injectable } from '@angular/core';
import { Interesado } from '../../models/interesado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testimonio } from '../../models/testimonio';


@Injectable({
  providedIn: 'root'
})
export class TestimonioService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPoint: string = 'http://localhost:8080/api/testimonios'
  
  constructor(private http: HttpClient) { }

  getTestimonios(): Observable<Testimonio[]>{
    return this.http.get<Testimonio[]>(this.urlEndPoint);
   }

   getTestimonio(id_testimonio): Observable<Testimonio> {
    return this.http.get<Testimonio>(`${this.urlEndPoint}/${id_testimonio}`);
  }
   crearTestimonio(testimonio: Testimonio) : Observable<Testimonio>{
    console.log(testimonio);
    return this.http.post<Testimonio>(this.urlEndPoint, testimonio, {headers: this.httpHeaders});
  } 
  actualizarTestimonio(testimonio: Testimonio): Observable<Testimonio>{
    return this.http.put<Testimonio>(`${this.urlEndPoint}/${testimonio.id_testimonio}`,testimonio, {headers: this.httpHeaders})
  }
  eliminarTestimonio(id_testimonio: number): Observable<Testimonio>{
      return this.http.delete<Testimonio>(`${this.urlEndPoint}/${id_testimonio}`, {headers: this.httpHeaders})
  }
}
