import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Ficticio } from "../../models/Ficticio";
import { Practicas } from "../../models/Practicas";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-list-ficticio",
  templateUrl: "./list-ficticio.component.html",
  styleUrls: ["./list-ficticio.component.css"],
})
export class ListFicticioComponent implements OnInit {
  listficticio = new Array<Ficticio>();
  constructor(private ruta: Router, private servicio: ServiceService) {}

  ngOnInit() {
    this.listar_ficticio();
  }

  listar_ficticio() {
    this.servicio.getListadoProyectoFicticio().subscribe((data) => {
      this.listficticio = data;
    });
  }

  add_ficticio(): void {
    this.ruta.navigate(["/principal/add-proyecto_3ero"]);
  }

  eliminar_ficticio(ficticio: Ficticio): void {
    Swal.fire({
      title: "¿Está seguro?",
      text:
        "¿Seguro desea dar de baja al proyecto:" +
        ficticio.nombre_prficticio +
        "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Dar de Baja",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarFicticio(ficticio.id).subscribe(
          (data) => {
            this.listar_ficticio();
          },
          (err) => {
            console.log(
              "Hubo un error al Eliminar el Cargo => " + err.toString()
            );
          }
        );
        Swal.fire(
          "Dar de Baja!",
          "Se ha dado de baja al proyecto: " + ficticio.nombre_prficticio,
          "success"
        );
      }
    });
  }
}
