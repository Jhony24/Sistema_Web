import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages/pages.component";
import { ListPracticasComponent } from "./practicas/list-practicas/list-practicas.component";
import { AddPracticasComponent } from "./practicas/add-practicas/add-practicas.component";
import { EditPracticasComponent } from "./practicas/edit-practicas/edit-practicas.component";
import { AddPasantiasComponent } from "./pasantias/add-pasantias/add-pasantias.component";
import { EditPasantiasComponent } from "./pasantias/edit-pasantias/edit-pasantias.component";
import { ListPasantiasComponent } from "./pasantias/list-pasantias/list-pasantias.component";
import { AddAreasComponent } from "./areas/add-areas/add-areas.component";
import { EditAreasComponent } from "./areas/edit-areas/edit-areas.component";
import { AddEmpresasComponent } from "./empresas/add-empresas/add-empresas.component";
import { EditEmpresasComponent } from "./empresas/edit-empresas/edit-empresas.component";
import { ListEmpresasComponent } from "./empresas/list-empresas/list-empresas.component";
import { ListAreasComponent } from "./areas/list-areas/list-areas.component";
import { PostulacionesComponent } from "./postulaciones/postulaciones.component";
import { ListCarrerasComponent } from "./carreras/list-carreras/list-carreras.component";
import { AddCarrerasComponent } from "./carreras/add-carreras/add-carreras.component";
import { EditCarrerasComponent } from "./carreras/edit-carreras/edit-carreras.component";
import { AddProyectoComponent } from "./proyecto_macro/add-proyecto/add-proyecto.component";
import { EditProyectoComponent } from "./proyecto_macro/edit-proyecto/edit-proyecto.component";
import { ListProyectoComponent } from "./proyecto_macro/list-proyecto/list-proyecto.component";
import { AddConveniosComponent } from "./convenios/add-convenios/add-convenios.component";
import { EditConveniosComponent } from "./convenios/edit-convenios/edit-convenios.component";
import { ListConveniosComponent } from "./convenios/list-convenios/list-convenios.component";
import { AddBasicoComponent } from "./proyecto_basico/add-basico/add-basico.component";
import { EditBasicoComponent } from "./proyecto_basico/edit-basico/edit-basico.component";
import { ListBasicoComponent } from "./proyecto_basico/list-basico/list-basico.component";
import { ListUserComponent } from "./usuarios/list-user/list-user.component";
import { ActivarUserComponent } from "./usuarios/activar-user/activar-user.component";
import { AprobarComponent } from './postulaciones/aprobar/aprobar.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "add-practicas-profesionales", component: AddPracticasComponent },
      {
        path: "edit-practicas-profesionales/:id",
        component: EditPracticasComponent,
      },
      {
        path: "list-practicas-profesionales",
        component: ListPracticasComponent,
      },
      { path: "add-pasantias", component: AddPasantiasComponent },
      { path: "edit-pasantias/:id", component: EditPasantiasComponent },
      { path: "list-pasantias", component: ListPasantiasComponent },
      { path: "add-areas", component: AddAreasComponent },
      { path: "edit-areas/:id", component: EditAreasComponent },
      { path: "list-areas", component: ListAreasComponent },
      { path: "add-empresas", component: AddEmpresasComponent },
      { path: "edit-empresas/:id", component: EditEmpresasComponent },
      { path: "list-empresas", component: ListEmpresasComponent },
      { path: "postulaciones", component: PostulacionesComponent },
      { path: "add-carreras", component: AddCarrerasComponent },
      { path: "edit-carreras/:id", component: EditCarrerasComponent },
      { path: "list-carreras", component: ListCarrerasComponent },
      { path: "add-proyecto", component: AddProyectoComponent },
      { path: "edit-proyecto/:id", component: EditProyectoComponent },
      { path: "list-proyecto", component: ListProyectoComponent },
      { path: "add-convenio", component: AddConveniosComponent },
      { path: "edit-convenio/:id", component: EditConveniosComponent },
      { path: "list-convenio", component: ListConveniosComponent },
      { path: "add-basico/:id", component: AddBasicoComponent },
      { path: "edit-basico/:id", component: EditBasicoComponent },
      { path: "list-basico/:id", component: ListBasicoComponent },
      { path: "list-user", component: ListUserComponent },
      { path: "activar/:id", component: ActivarUserComponent },
      {path: "aprobar/:id",component:AprobarComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
