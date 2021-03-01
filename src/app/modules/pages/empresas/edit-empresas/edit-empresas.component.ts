import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Empresa } from "../../models/Empresa";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-edit-empresas",
  templateUrl: "./edit-empresas.component.html",
  styleUrls: ["./edit-empresas.component.css"],
})
export class EditEmpresasComponent implements OnInit {
  public error = <any>[];
  empresa: Empresa = {
    nombreempresa: null,
    tipo_empresa: null,
    nombrerepresentante: null,
    ruc: null,
    direccion: null,
    telefono: null,
    correo: null,
    idcarrera: null,
    actividades: null,
    estadoempresa: 1,
  };
  id: any;
  editing: boolean = false;
  empresas: Empresa[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoEmpresa().subscribe(
        (data: Empresa[]) => {
          this.empresas = data;
          this.empresa = this.empresas.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
  }

  ngOnInit(): void {}

  volver_lista(): void {
    this.ruta.navigate(["/principal/list-empresas"]);
  }

  put(myform: NgForm) {
    if (myform.valid == true) {
      this.servicio.actualizarEmpresa(this.empresa).subscribe(
        (data) => {
          this.ruta.navigate(["/principal/list-empresas"]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Empresa actualizada correctamente",
            showConfirmButton: false,
            timer: 1800,
          });
        },
        (err) => {
          this.handleError(err);
        }
      );
    } else {
      Swal.fire({
        position: "top",
        icon: "info",
        title: "Campos Obligatorios Vacíos o Inválidos",
        showConfirmButton: true,
        //timer: 1800,
      });
    }
  }
  handleError(error) {
    this.error = error.error;
  }
}
