import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import { ListPracticasComponent } from './practicas/list-practicas/list-practicas.component';
import { AddPracticasComponent } from './practicas/add-practicas/add-practicas.component';
import { EditPracticasComponent } from './practicas/edit-practicas/edit-practicas.component';
import { AddPasantiasComponent } from './pasantias/add-pasantias/add-pasantias.component';
import { EditPasantiasComponent } from './pasantias/edit-pasantias/edit-pasantias.component';
import { ListPasantiasComponent } from './pasantias/list-pasantias/list-pasantias.component';
import { AddAreasComponent } from './areas/add-areas/add-areas.component';
import { EditAreasComponent } from './areas/edit-areas/edit-areas.component';
import { AddEmpresasComponent } from './empresas/add-empresas/add-empresas.component';
import { EditEmpresasComponent } from './empresas/edit-empresas/edit-empresas.component';
import { ListEmpresasComponent } from './empresas/list-empresas/list-empresas.component';
import { ListAreasComponent } from './areas/list-areas/list-areas.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: 'add-practicas-profesionales', component: AddPracticasComponent},
      {path: 'edit-practicas-profesionales', component: EditPracticasComponent},
      {path: 'list-practicas-profesionales', component: ListPracticasComponent},
      {path: 'add-pasantias', component: AddPasantiasComponent},
      {path: 'edit-pasantias', component: EditPasantiasComponent},
      {path: 'list-pasantias', component: ListPasantiasComponent},
      {path: 'add-areas', component: AddAreasComponent},
      {path: 'edit-areas', component: EditAreasComponent},
      {path: 'list-areas', component: ListAreasComponent},
      {path: 'add-empresas', component: AddEmpresasComponent},
      {path: 'edit-empresas', component: EditEmpresasComponent},
      {path: 'list-empresas', component: ListEmpresasComponent},
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
