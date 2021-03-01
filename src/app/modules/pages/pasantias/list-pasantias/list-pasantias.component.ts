import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Practicas } from "../../models/Practicas";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-list-pasantias",
  templateUrl: "./list-pasantias.component.html",
  styleUrls: ["./list-pasantias.component.css"],
})
export class ListPasantiasComponent implements OnInit {
  listpracticas = new Array<Practicas>();
  constructor(private ruta: Router, private servicio: ServiceService) {}

  ngOnInit() {
    this.listar_practicas();
  }
  add_pasantias(): void {
    this.ruta.navigate(["/principal/add-pasantias"]);
  }

  listar_practicas() {
    this.servicio.getListadoPasantias().subscribe((data) => {
      this.listpracticas = data;
    });
  }

  eliminar_pasantia(pasantia: Practicas): void {
    Swal.fire({
      title: "¿Está seguro?",
      text:
        "¿Seguro desea dar de baja a la pasantía:" + pasantia.nombrearea + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Dar de Baja",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarPractica(pasantia.id).subscribe(
          (data) => {
            this.listar_practicas();
          },
          (err) => {
            console.log(
              "Hubo un error al Eliminar el Cargo => " + err.toString()
            );
          }
        );
        Swal.fire(
          "Dar de Baja!",
          "Se ha dado de baja a la pasantía: " + pasantia.nombrearea,
          "success"
        );
      }
    });
  }
}
