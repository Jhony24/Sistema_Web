import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Area } from "../models/Area";
import { Carrera } from "../models/Carrera";
import { Roles } from "../models/Roles";
import { Users } from "../models/Users";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  private API_REST = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) {}

  // return this.http.post(`${this.baseUrl}/register`, data);
  /*private httpHeader = new HttpHeaders({
    "Content-Type": "application/json",
    //'Authorization' : '1104808413'
    Authorization: "Bearer " + this.toke.get(),
  });*/

  //obtener rol del usuario registrado
  getRoles(): Observable<any[]> {
    return this.http.get<Roles[]>(`${this.API_REST}/roles-profile`);
  }
  //obtener el usuario del perfil
  getuser(): Observable<any> {
    return this.http.get(`${this.API_REST}/user-profile`);
  }

  /////////////Servicio de Areas//////////////////7
  getListadoAreas(): Observable<any[]> {
    return this.http.get<Area[]>(`${this.API_REST}/area`);
  }
  getArea(id: number): Observable<any> {
    return this.http.get<Area>(`${this.API_REST}/area` + "/" + id);
  }
  crearArea(newarea: Area): Observable<any> {
    return this.http.post<Area>(`${this.API_REST}/area`, newarea);
  }
  actualizarArea(myarea: Area): Observable<any> {
    return this.http.put<Area>(
      `${this.API_REST}/area` + "/" + myarea.id,
      myarea
    );
  }
  eliminarArea(id: number): Observable<any> {
    return this.http.delete<Area>(`${this.API_REST}/area` + "/" + id);
  }

  /////////////Servicio de Carreras////////////////////7
  //obtener datos de carreras
  getListadoCarreras(): Observable<any[]> {
    return this.http.get<Carrera[]>(`${this.API_REST}/carrera`);
  }
  //obtener carreras para registrarse
  getListadoCarrerasAdmin(): Observable<any[]> {
    return this.http.get<Carrera[]>(`${this.API_REST}/carreraR`);
  }
  //obtener carrera segun id

  //crear carreras
  crearCarrera(newcarrera: Carrera): Observable<any> {
    return this.http.post<Carrera>(`${this.API_REST}/carrera`, newcarrera);
  }

  //////////////Servicio de Usuarios/////////////

  getListadoUsuarios(): Observable<any[]> {
    return this.http.get<Users[]>(`${this.API_REST}/users`);
  }
  activarusuario(myarea: Users): Observable<any> {
    return this.http.put<Users>(
      `${this.API_REST}/usuarioA` + "/" + myarea.id,
      myarea
    );
  }
}
