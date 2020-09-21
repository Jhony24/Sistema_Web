import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { ProyectoBasico } from "../../models/ProyectoBasico";
import { ProyectoMacro } from "../../models/ProyectoMacro";
import { ListProyectoComponent } from "../../proyecto_macro/list-proyecto/list-proyecto.component";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-list-basico",
  templateUrl: "./list-basico.component.html",
  styleUrls: ["./list-basico.component.css"],
})
export class ListBasicoComponent implements OnInit {
  id: any;
  editing: boolean = false;
  convenios: ProyectoMacro[];
  listbasico = new Array<ProyectoBasico>();

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {}

  ngOnInit() {
    /*this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getProyectosBasicos(this.id).subscribe(
        (data) => {
          this.listbasico = data;
          console.log("basico",this.listbasico);
        },
        (error) => {}
      );
    }*/
    this.listar_basico();
  }
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-proyecto"]);
  }

  listar_basico() {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getProyectosBasicos(this.id).subscribe(
        (data) => {
          this.listbasico = data;
        },
        (error) => {}
      );
    }
  }

  eliminar_basico(basico: ProyectoBasico): void {
    Swal.fire({
      title: "¿Está seguro?",
      text:
        "¿Seguro desea dar de baja al proyecto basico:" +
        basico.nombre_prbasico +
        "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Dar de Baja",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarBasico(basico.id).subscribe(
          (data) => {
            this.listar_basico();
          },
          (err) => {
            console.log(
              "Hubo un error al Eliminar el Cargo => " + err.toString()
            );
          }
        );
        Swal.fire(
          "Dar de Baja!",
          "Se ha dado de baja al proyecto basico: " + basico.nombre_prbasico,
          "success"
        );
      }
    });
  }
}
