import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Carrera } from "../models/Carrera";

@Injectable({
  providedIn: "root",
})
export class CarreraserviceService {
  formcarreras: Carrera;

  private API_REST = "http://127.0.0.1:8000/api/carrera";
  private API_REST_Admin = "http://127.0.0.1:8000/api/carreraAdmin";

  constructor(private http: HttpClient) {}

  //obtener datos de carreras
  getListadoCarreras(): Observable<any[]> {
    return this.http.get<Carrera[]>(this.API_REST);
  }

  getListadoCarrerasAdmin(): Observable<any[]> {
    return this.http.get<Carrera[]>(this.API_REST_Admin);
  }
  //obtener carrera segun id

  //crear carreras
  crearCarrera(newcarrera: Carrera): Observable<any> {
    return this.http.post<Carrera>(this.API_REST, newcarrera);
  }
}
