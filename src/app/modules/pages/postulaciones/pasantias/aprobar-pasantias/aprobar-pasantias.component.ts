import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Postulacion } from "../../../models/Postulacion";
import { ServiceService } from "../../../services/service.service";

@Component({
  selector: "app-aprobar-pasantias",
  templateUrl: "./aprobar-pasantias.component.html",
  styleUrls: ["./aprobar-pasantias.component.css"],
})
export class AprobarPasantiasComponent implements OnInit {
  postulacion: Postulacion = {
    fecha_postulacion: null,
    cedula: null,
    nombre_completo: null,
    telefono: null,
    ciclo: null,
    email: null,
    fecha_inicio: null,
    hora_entrada: null,
    hora_salida: null,
    salario: null,
    ciclo_necesario: null,
    nombrearea: null,
    observacion: null,
    nombreempresa: null,
    tipo_practica: null,
    nombrecarreras: null,
  };

  id: any;
  editing: boolean = false;
  postulaciones: Postulacion[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoPostulantesPasantias().subscribe(
        (data: Postulacion[]) => {
          this.postulaciones = data;
          this.postulacion = this.postulaciones.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  ngOnInit(): void {}
  put() {
    Swal.fire({
      title: "¿Está seguro?",
      text:
        "¿Seguro desea aprobar la postulacion a:" +
        this.postulacion.nombre_completo +
        "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Aprobar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          allowOutsideClick: false,
          icon: "info",
          title: "Espere por favor...",
        });
        Swal.showLoading();
        this.servicio
          .aprobarpsotulacion(this.postulacion)
          .subscribe((data) => {});
        this.ruta.navigateByUrl("/principal/pasantias_nuevas");
        Swal.fire(
          "Postulacion Aprobada satisfactoriamente!",
          "Se le ha notificado a " +
            this.postulacion.nombre_completo +
            " por medio de correo electronico",
          "success"
        );
      }
    });
  }
  rechazar() {
    Swal.fire({
      title: "¿Está seguro?",
      text:
        "¿Seguro desea rechazar la postulacion a:" +
        this.postulacion.nombre_completo +
        "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Rechazar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          allowOutsideClick: false,
          icon: "info",
          title: "Espere por favor...",
        });
        Swal.showLoading();
        this.servicio
          .rechazarpsotulacion(this.postulacion)
          .subscribe((data) => {
            Swal.close();
            Swal.fire(
              "Postulacion Rechazada satisfactoriamente!",
              "Se le ha notificado a " +
                this.postulacion.nombre_completo +
                " por medio de correo electronico",
              "success"
            );
            this.ruta.navigate(["/principal/pasantias_nuevas"]);
          });
      }
    });
  }
  volver_lista(): void {
    this.ruta.navigate(["/principal/pasantias_nuevas"]);
  }
}
