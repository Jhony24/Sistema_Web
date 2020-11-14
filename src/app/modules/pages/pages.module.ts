import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages/pages.component";
import { LayoutModule } from "../layout/layout.module";
import { RouterModule } from "@angular/router";
import { AddPracticasComponent } from "./practicas/add-practicas/add-practicas.component";
import { EditPracticasComponent } from "./practicas/edit-practicas/edit-practicas.component";
import { ListPracticasComponent } from "./practicas/list-practicas/list-practicas.component";
import { AddPasantiasComponent } from "./pasantias/add-pasantias/add-pasantias.component";
import { EditPasantiasComponent } from "./pasantias/edit-pasantias/edit-pasantias.component";
import { ListPasantiasComponent } from "./pasantias/list-pasantias/list-pasantias.component";
import { AddAreasComponent } from "./areas/add-areas/add-areas.component";
import { EditAreasComponent } from "./areas/edit-areas/edit-areas.component";
import { ListAreasComponent } from "./areas/list-areas/list-areas.component";
import { AddEmpresasComponent } from "./empresas/add-empresas/add-empresas.component";
import { EditEmpresasComponent } from "./empresas/edit-empresas/edit-empresas.component";
import { ListEmpresasComponent } from "./empresas/list-empresas/list-empresas.component";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AddCarrerasComponent } from "./carreras/add-carreras/add-carreras.component";
import { EditCarrerasComponent } from "./carreras/edit-carreras/edit-carreras.component";
import { ListCarrerasComponent } from "./carreras/list-carreras/list-carreras.component";
import { AddProyectoComponent } from "./proyecto_macro/add-proyecto/add-proyecto.component";
import { EditProyectoComponent } from "./proyecto_macro/edit-proyecto/edit-proyecto.component";
import { ListProyectoComponent } from "./proyecto_macro/list-proyecto/list-proyecto.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./services/auth-interceptor.service";

import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { AddConveniosComponent } from "./convenios/add-convenios/add-convenios.component";
import { EditConveniosComponent } from "./convenios/edit-convenios/edit-convenios.component";
import { ListConveniosComponent } from "./convenios/list-convenios/list-convenios.component";
import { AddBasicoComponent } from "./proyecto_basico/add-basico/add-basico.component";
import { EditBasicoComponent } from "./proyecto_basico/edit-basico/edit-basico.component";
import { ListBasicoComponent } from "./proyecto_basico/list-basico/list-basico.component";
import { ListUserComponent } from './usuarios/list-user/list-user.component';
import { ActivarUserComponent } from './usuarios/activar-user/activar-user.component';
import { AprobarComponent } from './postulaciones/aprobar/aprobar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PracFinalizadasComponent } from './postulaciones/practicas/prac-finalizadas/prac-finalizadas.component';
import { PracNuevasComponent } from './postulaciones/practicas/prac-nuevas/prac-nuevas.component';
import { PracRechazadasComponent } from './postulaciones/practicas/prac-rechazadas/prac-rechazadas.component';
import { PracAprobadasComponent } from './postulaciones/practicas/prac-aprobadas/prac-aprobadas.component';
import { PasanAprobadasComponent } from './postulaciones/pasantias/pasan-aprobadas/pasan-aprobadas.component';
import { PasanNuevasComponent } from './postulaciones/pasantias/pasan-nuevas/pasan-nuevas.component';
import { PasanRechazadasComponent } from './postulaciones/pasantias/pasan-rechazadas/pasan-rechazadas.component';
import { PasanFinalizadasComponent } from './postulaciones/pasantias/pasan-finalizadas/pasan-finalizadas.component';
import { ProyAprobadasComponent } from './postulaciones/proyectos/proy-aprobadas/proy-aprobadas.component';
import { ProyNuevosComponent } from './postulaciones/proyectos/proy-nuevos/proy-nuevos.component';
import { ProyRechazadosComponent } from './postulaciones/proyectos/proy-rechazados/proy-rechazados.component';
import { ProyFinalizadosComponent } from './postulaciones/proyectos/proy-finalizados/proy-finalizados.component';

@NgModule({
  declarations: [
    PagesComponent,
    AddPracticasComponent,
    EditPracticasComponent,
    ListPracticasComponent,
    AddPasantiasComponent,
    EditPasantiasComponent,
    ListPasantiasComponent,
    AddAreasComponent,
    EditAreasComponent,
    ListAreasComponent,
    AddEmpresasComponent,
    EditEmpresasComponent,
    ListEmpresasComponent,
    AddCarrerasComponent,
    EditCarrerasComponent,
    ListCarrerasComponent,
    AddProyectoComponent,
    EditProyectoComponent,
    ListProyectoComponent,
    AddConveniosComponent,
    EditConveniosComponent,
    ListConveniosComponent,
    AddBasicoComponent,
    EditBasicoComponent,
    ListBasicoComponent,
    ListUserComponent,
    ActivarUserComponent,
    AprobarComponent,
    FilterPipe,
    PracFinalizadasComponent,
    PracNuevasComponent,
    PracRechazadasComponent,
    PracAprobadasComponent,
    PasanAprobadasComponent,
    PasanNuevasComponent,
    PasanRechazadasComponent,
    PasanFinalizadasComponent,
    ProyAprobadasComponent,
    ProyNuevosComponent,
    ProyRechazadosComponent,
    ProyFinalizadosComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class PagesModule {}
