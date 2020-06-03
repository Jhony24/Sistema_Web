import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {LayoutModule} from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { AddPracticasComponent } from './practicas/add-practicas/add-practicas.component';
import { EditPracticasComponent } from './practicas/edit-practicas/edit-practicas.component';
import { ListPracticasComponent } from './practicas/list-practicas/list-practicas.component';
import { AddPasantiasComponent } from './pasantias/add-pasantias/add-pasantias.component';
import { EditPasantiasComponent } from './pasantias/edit-pasantias/edit-pasantias.component';
import { ListPasantiasComponent } from './pasantias/list-pasantias/list-pasantias.component';
import { AddAreasComponent } from './areas/add-areas/add-areas.component';
import { EditAreasComponent } from './areas/edit-areas/edit-areas.component';
import { ListAreasComponent } from './areas/list-areas/list-areas.component';
import { AddEmpresasComponent } from './empresas/add-empresas/add-empresas.component';
import { EditEmpresasComponent } from './empresas/edit-empresas/edit-empresas.component';
import { ListEmpresasComponent } from './empresas/list-empresas/list-empresas.component';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [PagesComponent, AddPracticasComponent, EditPracticasComponent, ListPracticasComponent, AddPasantiasComponent, EditPasantiasComponent, ListPasantiasComponent, AddAreasComponent, EditAreasComponent, ListAreasComponent, AddEmpresasComponent, EditEmpresasComponent, ListEmpresasComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class PagesModule {
}
