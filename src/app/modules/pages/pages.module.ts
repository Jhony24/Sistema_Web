import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {LayoutModule} from '../layout/layout.module';
import { PracticasComponent } from './practicas/practicas.component';
import { RouterModule } from '@angular/router';
import { PasantiasComponent } from './pasantias/pasantias.component';
import { AreasComponent } from './areas/areas.component';
import { EmpresasComponent } from './empresas/empresas.component';


@NgModule({
  declarations: [PagesComponent, PracticasComponent, PasantiasComponent, AreasComponent, EmpresasComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    RouterModule
  ]
})
export class PagesModule {
}
