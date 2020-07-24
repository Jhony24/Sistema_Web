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
import { PostulacionesComponent } from "./postulaciones/postulaciones.component";
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
    PostulacionesComponent,
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
