import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotocicletaService {

  constructor(private http: HttpClient) { }

  private API_Motocicleta = "http://localhost:3000/motos";

  getPersonal(): Observable <any>{
    return this.http.get( this.API_Motocicleta)
  }
  getPersonalUnico(id: any):Observable<any>{
    return this.http.get( `${this.API_Motocicleta}/${id}` )
  }
  ////////////////GUARDAR- POST//////////////
  postPersonal(persona:JSON): Observable<any>{
    return this.http.post(this.API_Motocicleta, persona)
  }
  ///////////////Eliminar////////////////////////////////


deleteCarroID(id:any): Observable<any>{
  return this.http.delete(`${this.API_Motocicleta}/${id}`)
}
///////////////////EDITAR//////////////////////
putNosotros(persona:any):Observable <any>{
  return this.http.put(`${this.API_Motocicleta}/${persona.id}`,persona)
}

}
