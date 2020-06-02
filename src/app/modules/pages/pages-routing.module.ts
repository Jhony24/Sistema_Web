import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import { PracticasComponent } from './practicas/practicas.component';
import { PasantiasComponent } from './pasantias/pasantias.component';
import { AreasComponent } from './areas/areas.component';
import { EmpresasComponent } from './empresas/empresas.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: 'practicas-profesionales', component: PracticasComponent},
      {path: 'pasantias', component: PasantiasComponent},
      {path: 'areas', component: AreasComponent},
      {path: 'empresas', component: EmpresasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
