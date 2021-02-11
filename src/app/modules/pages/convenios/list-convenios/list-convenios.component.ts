import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Convenio } from "../../models/Convenio";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-list-convenios",
  templateUrl: "./list-convenios.component.html",
  styleUrls: ["./list-convenios.component.css"],
})
export class ListConveniosComponent implements OnInit {
  listconvenios = new Array<Convenio>();
  constructor(private ruta: Router, private servicio: ServiceService) {}

  ngOnInit() {
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

  eliminar_convenio(convenio: Convenio): void {
    Swal.fire({
      title: "¿Está seguro?",
      text:
        "¿Seguro desea dar de baja al convenio:" + convenio.nombreempresa + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Dar de Baja",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarConvenio(convenio.id).subscribe(
          (data) => {
            this.listar_convenios();
          },
          (err) => {
            console.log(
              "Hubo un error al Eliminar el Cargo => " + err.toString()
            );
          }
        );
        Swal.fire(
          "Dar de Baja!",
          "Se ha dado de baja al convenio: " + convenio.nombreempresa,
          "success"
        );
      }
    });
  }
}
