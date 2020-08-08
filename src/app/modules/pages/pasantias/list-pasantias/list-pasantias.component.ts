import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Practicas } from '../../models/Practicas';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: "app-list-pasantias",
  templateUrl: "./list-pasantias.component.html",
  styleUrls: ["./list-pasantias.component.css"],
})
export class ListPasantiasComponent implements OnInit {

  listpracticas = new Array<Practicas>();
  constructor(private ruta: Router, private servicio:ServiceService) {}

  ngOnInit() {
    this.listar_practicas();
  }
  add_pasantias(): void {
    this.ruta.navigate(["/principal/add-pasantias"]);
  }

  listar_practicas() {
    this.servicio.getListadoPasantias().subscribe((data) => {
      this.listpracticas = data;
      console.log(this.listpracticas);
    });
  }
}
