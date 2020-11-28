import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Area } from "../models/Area";
import { Carrera } from "../models/Carrera";
import { Convenio } from "../models/Convenio";
import { Empresa } from "../models/Empresa";
import { Ficticio } from "../models/Ficticio";
import { Postulacion } from "../models/Postulacion";
import { Practicas } from "../models/Practicas";
import { ProyectoBasico } from "../models/ProyectoBasico";
import { ProyectoMacro } from "../models/ProyectoMacro";
import { Roles } from "../models/Roles";
import { Users } from "../models/Users";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  //private API_REST =
  //"https://proeditsclub.com/mendoza/backendPracticas/public/index.php/api";
  private API_REST = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) {}

  //obtener rol del usuario registrado
  getRoles(): Observable<any[]> {
    return this.http.get<Roles[]>(`${this.API_REST}/roles-profile`);
  }
  //obtener el usuario del perfil
  getuser(): Observable<any> {
    return this.http.get(`${this.API_REST}/user-profile`);
  }
  getusercarrera(): Observable<any> {
    return this.http.get(`${this.API_REST}/user-carrera`);
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

  crearCarrera(newcarrera: Carrera): Observable<any> {
    return this.http.post<Carrera>(`${this.API_REST}/carrera`, newcarrera);
  }

  actualizarCarrera(mycarrera: Carrera): Observable<any> {
    return this.http.put<Carrera>(
      `${this.API_REST}/carrera` + "/" + mycarrera.id,
      mycarrera
    );
  }

  eliminarCarrera(id: number): Observable<any> {
    return this.http.delete<Carrera>(`${this.API_REST}/carrera` + "/" + id);
  }

  //////////////Servicio de Usuarios/////////////

  getListadoUsuarios(): Observable<any[]> {
    return this.http.get<Users[]>(`${this.API_REST}/users`);
  }
  activarusuario(usuario: Users): Observable<any> {
    return this.http.put<Users>(
      `${this.API_REST}/usuarioA` + "/" + usuario.id,
      usuario
    );
  }

  desactivarusuario(usuario: Users): Observable<any> {
    return this.http.put<Users>(
      `${this.API_REST}/usuarioD` + "/" + usuario.id,
      usuario
    );
  }

  ////////////////Servicio de Empresa////////////////////
  getListadoEmpresa(): Observable<any[]> {
    return this.http.get<Empresa[]>(`${this.API_REST}/empresa`);
  }
  getEmpresa(id: number): Observable<any> {
    return this.http.get<Empresa>(`${this.API_REST}/empresa` + "/" + id);
  }
  crearEmpresa(newempresa: Empresa): Observable<any> {
    return this.http.post<Empresa>(`${this.API_REST}/empresa`, newempresa);
  }
  actualizarEmpresa(myempresa: Empresa): Observable<any> {
    return this.http.put<Empresa>(
      `${this.API_REST}/empresa` + "/" + myempresa.id,
      myempresa
    );
  }
  eliminarEmpresa(id: number): Observable<any> {
    return this.http.delete<Empresa>(`${this.API_REST}/empresa` + "/" + id);
  }

  /////////////Servicio de Convenios//////////
  getListadoConvenios(): Observable<any[]> {
    return this.http.get<Convenio[]>(`${this.API_REST}/convenio`);
  }
  getConvenio(id: number): Observable<any> {
    return this.http.get<Convenio>(`${this.API_REST}/convenio` + "/" + id);
  }
  crearConvenio(newconvenio: Convenio): Observable<any> {
    return this.http.post<Convenio>(`${this.API_REST}/convenio`, newconvenio);
  }
  actualizarConvenio(myconvenio: Convenio): Observable<any> {
    return this.http.put<Convenio>(
      `${this.API_REST}/convenio` + "/" + myconvenio.id,
      myconvenio
    );
  }
  eliminarConvenio(id: number): Observable<any> {
    return this.http.delete<Convenio>(`${this.API_REST}/convenio` + "/" + id);
  }

  ///////////Servicio de Practicas/////////////////

  getListadoPracticas(): Observable<any[]> {
    return this.http.get<Practicas[]>(`${this.API_REST}/practica`);
  }
  getListadoPasantias(): Observable<any[]> {
    return this.http.get<Practicas[]>(`${this.API_REST}/practicaP`);
  }
  crearPractica(newpractica: Practicas): Observable<any> {
    return this.http.post<Practicas>(`${this.API_REST}/practica`, newpractica);
  }

  actualizarPractica(mycpractica: Practicas): Observable<any> {
    return this.http.put<Practicas>(
      `${this.API_REST}/practica` + "/" + mycpractica.id,
      mycpractica
    );
  }
  eliminarPractica(id: number): Observable<any> {
    return this.http.delete<Practicas>(`${this.API_REST}/practica` + "/" + id);
  }

  ////////////Servicio de Proyecto macro(////////
  getListadoProyectoMacro(): Observable<any[]> {
    return this.http.get<ProyectoMacro[]>(`${this.API_REST}/macro`);
  }
  crearProyectoMacro(newmacro: ProyectoMacro): Observable<any> {
    return this.http.post<ProyectoMacro>(`${this.API_REST}/macro`, newmacro);
  }

  actualizarMacro(mymacro: ProyectoMacro): Observable<any> {
    return this.http.put<ProyectoMacro>(
      `${this.API_REST}/macro` + "/" + mymacro.id,
      mymacro
    );
  }
  eliminarMacro(id: number): Observable<any> {
    return this.http.delete<ProyectoMacro>(`${this.API_REST}/macro` + "/" + id);
  }

  /////Servicio de Proyecto Basico/////////////
  getba2(): Observable<any[]> {
    return this.http.get<ProyectoBasico[]>(`${this.API_REST}/basico`);
  }
  getbasicosedit(id: number): Observable<any> {
    return this.http.get<ProyectoBasico>(`${this.API_REST}/basico` + "/" + id);
  }
  getProyectosBasicos(id: number): Observable<any> {
    return this.http.get<ProyectoBasico>(`${this.API_REST}/macro` + "/" + id);
  }
  crearProyectoBasico(newbasico: ProyectoBasico): Observable<any> {
    return this.http.post<ProyectoBasico>(`${this.API_REST}/basico`, newbasico);
  }

  actualizarBasico(mybasico: ProyectoBasico): Observable<any> {
    return this.http.put<ProyectoBasico>(
      `${this.API_REST}/basico` + "/" + mybasico.id,
      mybasico
    );
  }
  eliminarBasico(id: number): Observable<any> {
    return this.http.delete<ProyectoBasico>(
      `${this.API_REST}/basico` + "/" + id
    );
  }

  ///////////Servicio de Postulacion/////////////////

  getListadoPostulantesPracticas(): Observable<any[]> {
    return this.http.get<Postulacion[]>(`${this.API_REST}/postulacionpractica`);
  }
  getListadoPostulantesPasantias(): Observable<any[]> {
    return this.http.get<Postulacion[]>(`${this.API_REST}/postulacionpasantia`);
  }
  getListadoPostulantesProyectos(): Observable<any[]> {
    return this.http.get<Postulacion[]>(`${this.API_REST}/postulacionproyecto`);
  }

  //aprobar y rechazar postulacion pendiente
  aprobarpsotulacion(postulacion: Postulacion): Observable<any> {
    return this.http.put<Postulacion>(
      `${this.API_REST}/aprobar` + "/" + postulacion.id,
      postulacion
    );
  }
  rechazarpsotulacion(postulacion: Postulacion): Observable<any> {
    return this.http.put<Postulacion>(
      `${this.API_REST}/rechazar` + "/" + postulacion.id,
      postulacion
    );
  }

  //////////////Ficticio
  getListadoProyectoFicticio(): Observable<any[]> {
    return this.http.get<Ficticio[]>(`${this.API_REST}/ficticio`);
  }
  crearFicticio(newficticio: Ficticio): Observable<any> {
    return this.http.post<Ficticio>(`${this.API_REST}/ficticio`, newficticio);
  }

  actualizarFiciticio(myficticio: Ficticio): Observable<any> {
    return this.http.put<Ficticio>(
      `${this.API_REST}/ficticio` + "/" + myficticio.id,
      myficticio
    );
  }
  eliminarFicticio(id: number): Observable<any> {
    return this.http.delete<Ficticio>(`${this.API_REST}/ficticio` + "/" + id);
  }
}
