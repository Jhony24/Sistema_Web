import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Carrera } from "../../models/Carrera";
import { Convenio } from "../../models/Convenio";
import { Empresa } from "../../models/Empresa";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-edit-convenios",
  templateUrl: "./edit-convenios.component.html",
  styleUrls: ["./edit-convenios.component.css"],
})
export class EditConveniosComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  listempresa = new Array<Empresa>();
  public error = <any>[];
  horas: string = "";
  public validador = true;
  regex = /[0-9]\s(?=meses|años)/g;

  convenio: Convenio = {
    tipo_convenio: null,
    idempresa: null,
    fecha_inicio: null,
    fecha_culminacion: null,
    objeto: null,
    idcarrera: null,
    estado_convenio: 1,
  };
  id: any;
  editing: boolean = false;
  convenios: Convenio[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoConvenios().subscribe(
        (data: Convenio[]) => {
          this.convenios = data;
          this.convenio = this.convenios.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
  }

  volver_lista(): void {
    this.ruta.navigate(["/principal/list-convenio"]);
  }

  ngOnInit() {
    this.listar_carreras();
    this.listar_empresas();
  }

  put(myform: NgForm) {
    if (myform.valid == true) {
      this.servicio.actualizarConvenio(this.convenio).subscribe(
        (data) => {
          this.ruta.navigate(["/principal/list-convenio"]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Convenio actualizado correctamente",
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
        title: "Campos Obligatorios Vacios o Invalidos",
        showConfirmButton: true,
      });
    }
  }
  handleError(error) {
    this.error = error.error;
  }
  listar_carreras() {
    this.servicio.getListadoCarreras().subscribe(
      (data) => {
        this.listcarreras = data;
      },
      (err) => {}
    );
  }
  listar_empresas() {
    this.servicio.getListadoEmpresa().subscribe(
      (data) => {
        this.listempresa = data;
      },
      (err) => {}
    );
  }

}
