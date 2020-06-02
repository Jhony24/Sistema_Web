import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';
import { PracticasComponent } from './practicas/practicas.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PagesComponent, DashBoardComponent, PracticasComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    RouterModule
  ]
})
export class PagesModule {
}
