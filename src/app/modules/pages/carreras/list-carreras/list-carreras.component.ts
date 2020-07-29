import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Carrera } from "../../models/Carrera";
import { ServiceService } from '../../services/service.service';

@Component({
  selector: "app-list-carreras",
  templateUrl: "./list-carreras.component.html",
  styleUrls: ["./list-carreras.component.css"],
})
export class ListCarrerasComponent implements OnInit {
  listcarreras = new Array<Carrera>();

  constructor(
    private ruta: Router,
    private servicio: ServiceService
  ) {}

  ngOnInit() {
    this.listar_carreras();
  }

  listar_carreras() {
    this.servicio.getListadoCarrerasAdmin().subscribe((data) => {
      this.listcarreras = data;
    });
  }
  add_carreras(): void {
    this.ruta.navigate(["/principal/add-carreras"]);
  }
}
