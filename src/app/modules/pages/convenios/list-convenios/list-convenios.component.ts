import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Convenio } from '../../models/Convenio';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: "app-list-convenios",
  templateUrl: "./list-convenios.component.html",
  styleUrls: ["./list-convenios.component.css"],
})
export class ListConveniosComponent implements OnInit {
  listconvenios=new Array<Convenio>();
  constructor(private ruta: Router, private servicio:ServiceService) {}

  ngOnInit(){
    this.listar_convenios();
  }
  listar_convenios() {
    this.servicio.getListadoConvenios().subscribe((data) => {
      this.listconvenios = data;
    });
  }

  list_empresas(): void {
    this.ruta.navigate(["/principal/list-empresas"]);
  }
  add_convenios(): void {
    this.ruta.navigate(["/principal/add-convenio"]);
  }
}
