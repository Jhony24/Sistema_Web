import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from "../models/Area";

@Injectable({
  providedIn: 'root'
})
export class AreaserviceService {

  private API_REST = 'http://127.0.0.1:8000/api/area';
  private httpHeader = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization' : '1104808413'
  })

  constructor(private http: HttpClient) { 
    console.log('Servicio Areas corriendo...');
  }

  //obtener datos de areas
  getListadoAreas():Observable<any[]>{
    return this.http.get<Area[]>(this.API_REST);
  }
  //obtener carrera segun id


  //crear areas
  crearArea(newarea: Area):Observable<any>{
    return this.http.post<Area>(this.API_REST, newarea, {headers:this.httpHeader});
  }
}
