import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import { PracticasComponent } from './practicas/practicas.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: 'practicas-profesionales', component: PracticasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
