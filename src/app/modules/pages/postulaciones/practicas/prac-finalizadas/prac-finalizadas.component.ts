import { Component, OnInit } from "@angular/core";
import { Postulacion } from "../../../models/Postulacion";
import { ServiceService } from "../../../services/service.service";

@Component({
  selector: "app-prac-finalizadas",
  templateUrl: "./prac-finalizadas.component.html",
  styleUrls: ["./prac-finalizadas.component.css"],
})
export class PracFinalizadasComponent implements OnInit {
  listpostulantes = new Array<Postulacion>();

  constructor(private servicio: ServiceService) {}

  ngOnInit() {
    this.listar_postulaciones();
  }

  listar_postulaciones() {
    this.servicio.getListadoPostulantesPracticas().subscribe((data) => {
      this.listpostulantes = data;
      console.log(this.listpostulantes);
    });
  }
}
