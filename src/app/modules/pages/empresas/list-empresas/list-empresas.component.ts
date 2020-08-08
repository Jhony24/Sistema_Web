import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Empresa } from '../../models/Empresa';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: "app-list-empresas",
  templateUrl: "./list-empresas.component.html",
  styleUrls: ["./list-empresas.component.css"],
})
export class ListEmpresasComponent implements OnInit {

  listempresas = new Array<Empresa>();
  constructor(private ruta: Router,private servicio:ServiceService) {}

  ngOnInit(){
    this.listar_empresas();
  }
  listar_empresas() {
    this.servicio.getListadoEmpresa().subscribe((data) => {
      this.listempresas = data;
    });
  }
  add_empresas(): void {
    this.ruta.navigate(["/principal/add-empresas"]);
  }
}
