import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Area } from "../models/Area";
import { TokenService } from "../../auth/services/token.service";
import { Users } from "../models/Users";
import { AuthInterceptorService } from "./auth-interceptor.service";
import { Roles } from "../models/Roles";

@Injectable({
  providedIn: "root",
})
export class AreaserviceService {
  selectUsuario: Users;

  private API_REST = "http://127.0.0.1:8000/api/area";
  private API_REST_R = "http://127.0.0.1:8000/api/roles-profile";
  private url = "http://127.0.0.1:8000/api/user-profile";

  /*private httpHeader = new HttpHeaders({
    "Content-Type": "application/json",
    //'Authorization' : '1104808413'
    Authorization: "Bearer " + this.toke.get(),
  });*/

  constructor(private http: HttpClient) {
    this.selectUsuario = new Users();
  }

  //obtener datos de areas
  getListadoAreas(): Observable<any[]> {
    return this.http.get<Area[]>(this.API_REST);
  }

  getRoles(): Observable<any[]> {
    return this.http.get<Roles[]>(this.API_REST_R);
  }

  getuser(): Observable<any> {
    return this.http.get(this.url);
  }

  //obtener carrera segun id

  //crear areas
  crearArea(newarea: Area): Observable<any> {
    return this.http.post<Area>(this.API_REST, newarea);
  }
}
