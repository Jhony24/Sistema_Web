import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Practicas } from '../../models/Practicas';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: "app-list-practicas",
  templateUrl: "./list-practicas.component.html",
  styleUrls: ["./list-practicas.component.css"],
})
export class ListPracticasComponent implements OnInit {

  listpracticas = new Array<Practicas>();
  constructor(private ruta: Router, private servicio:ServiceService) {}

  ngOnInit(){
    this.listar_practicas();
  }

  listar_practicas() {
    this.servicio.getListadoPracticas().subscribe((data) => {
      this.listpracticas = data;
      console.log(this.listpracticas);
    });
  }

  add_practicas(): void {
    this.ruta.navigate(["/principal/add-practicas-profesionales"]);
  }
}
