import { Component, OnInit } from "@angular/core";
import { Postulacion } from "../../../models/Postulacion";
import { ServiceService } from "../../../services/service.service";

@Component({
  selector: "app-prac-nuevas",
  templateUrl: "./prac-nuevas.component.html",
  styleUrls: ["./prac-nuevas.component.css"],
})
export class PracNuevasComponent implements OnInit {
  listpostulantes = new Array<Postulacion>();
  tipo = "";
  constructor(private servicio: ServiceService) {}
  filterPost = "";

  ngOnInit() {
    this.listar_postulaciones();
  }

  listar_postulaciones() {
    this.servicio.getListadoPostulantesPracticas().subscribe((data) => {
      this.listpostulantes = data;
      console.log(this.tipo);
    });
  }
}
