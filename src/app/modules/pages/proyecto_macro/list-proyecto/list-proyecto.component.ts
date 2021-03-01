import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { ProyectoMacro } from "../../models/ProyectoMacro";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-list-proyecto",
  templateUrl: "./list-proyecto.component.html",
  styleUrls: ["./list-proyecto.component.css"],
})
export class ListProyectoComponent implements OnInit {
  listmacro = new Array<ProyectoMacro>();
  listbasico = new Array<ProyectoMacro>();

  constructor(private ruta: Router, private servicio: ServiceService) {}

  ngOnInit() {
    this.listar_macro();
  }

  add_macro(): void {
    this.ruta.navigate(["/principal/add-proyecto"]);
  }
  add_basico(): void {
    this.ruta.navigate(["/principal/add-basico"]);
  }

  listar_macro() {
    this.servicio.getListadoProyectoMacro().subscribe((data) => {
      this.listmacro = data;
    });
  }

  eliminar_macro(macro: ProyectoMacro): void {
    Swal.fire({
      title: "¿Está seguro?",
      text:
        "¿Seguro desea dar de baja al proyecto macro:" +
        macro.nombre_prmacro +
        "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Dar de Baja",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarMacro(macro.id).subscribe(
          (data) => {
            this.listar_macro();
          },
          (err) => {
            console.log(
              "Hubo un error al Eliminar el Cargo => " + err.toString()
            );
          }
        );
        Swal.fire(
          "Dar de Baja!",
          "Se ha dado de baja al proyecto macro: " + macro.nombre_prmacro,
          "success"
        );
      }
    });
  }
}
