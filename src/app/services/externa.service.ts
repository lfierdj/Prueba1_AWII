import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternaService {
  constructor(private http: HttpClient) { }

  private API_Empleados = "https://jritsqmet.github.io/web-api/crash.json";

  getEmpleados(): Observable <any>{
    return this.http.get( this.API_Empleados)
  }
}
