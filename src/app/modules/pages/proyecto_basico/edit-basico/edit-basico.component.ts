import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Empresa } from "../../models/Empresa";
import { ProyectoBasico } from "../../models/ProyectoBasico";
import { ProyectoMacro } from "../../models/ProyectoMacro";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-edit-basico",
  templateUrl: "./edit-basico.component.html",
  styleUrls: ["./edit-basico.component.css"],
})
export class EditBasicoComponent implements OnInit {
  listmacro = new Array<ProyectoMacro>();
  listempresa = new Array<Empresa>();
  fechapractica: string = "";
  public validador = true;
  public error = <any>[];

  basico: ProyectoBasico = {
    idmacro: null,
    idempresa: null,
    nombre_prbasico: null,
    estudianes_requeridos: null,
    ciclo: null,
    horas_cumplir: null,
    fecha_inicio: null,
    fecha_fin: null,
    modalidad: null,
    actividades: null,
    requerimientos: null,
    nombreempresa: null,
    estadobasico: 1,
  };

  id: any;
  editing: boolean = false;
  basicos: ProyectoBasico[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getba2().subscribe(
        (data: ProyectoBasico[]) => {
          this.basicos = data;
          this.basico = this.basicos.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
  }

  ngOnInit() {
    this.listar_macro();
    this.listar_empresas();
  }
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-basico/", this.basico.idmacro]);
  }

  put(myform: NgForm) {
    if (myform.valid == true && this.validador == true) {
      this.servicio.actualizarBasico(this.basico).subscribe(
        (data) => {
          this.ruta.navigate(["/principal/list-basico/", this.basico.idmacro]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Proyecto Basico actualizado correctamente",
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
        //timer: 1800,
      });
    }
  }
  handleError(error) {
    this.error = error.error;
  }
  listar_macro() {
    this.servicio.getListadoProyectoMacro().subscribe((data) => {
      this.listmacro = data;
    });
  }
  listar_empresas() {
    this.servicio.getListadoEmpresa().subscribe(
      (data) => {
        this.listempresa = data;
      },
      (err) => {}
    );
  }
  validarfecha(event: any) {
    this.fechapractica = event.target.value;
    var fecha_actual;
    let fechaCorrecta = false;
    var f = new Date();
    var mes = (f.getMonth() + 1).toString();
    if (mes.length <= 1) {
      mes = "0" + mes;
    }
    var dia = f.getDate().toString();
    if (dia.length <= 1) {
      dia = "0" + dia;
    }
    fecha_actual = f.getFullYear() + "-" + mes + "-" + dia;

    if (this.fechapractica > fecha_actual) {
      fechaCorrecta = true;
    } else if (this.fechapractica == fecha_actual) {
      fechaCorrecta = false;
    } else if (this.fechapractica < fecha_actual) {
      fechaCorrecta = false;
    }

    this.validador = fechaCorrecta;
  }
}
