import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Area } from "../../models/Area";
import { Carrera } from "../../models/Carrera";
import { Convenio } from "../../models/Convenio";
import { Empresa } from "../../models/Empresa";
import { Practicas } from "../../models/Practicas";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-edit-pasantias",
  templateUrl: "./edit-pasantias.component.html",
  styleUrls: ["./edit-pasantias.component.css"],
})
export class EditPasantiasComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  listarea = new Array<Area>();
  listempresa = new Array<Empresa>();
  listconvenios = new Array<Convenio>();
  fechapractica: string = "";
  cupos: number;
  cumplir: number;
  horas: string = "";
  public validador = true;
  public validarcupo = true;
  public validadorhora = true;
  public validadorhorasalida = true;
  public validadorcumplir = true;
  public error = <any>[];

  pasantia: Practicas = {
    tipo_practica: 2,
    cupos: null,
    horas_cumplir: null,
    ciclo_necesario: null,
    fecha_inicio: null,
    hora_entrada: null,
    hora_salida: null,
    actividades: null,
    salario: null,
    //modalidad: null,
    requerimientos: null,
    ppestado: 1,
    idcarrera: null,
    idarea: null,
    idempresa: null,
  };

  id: any;
  editing: boolean = false;
  pasantias: Practicas[];
  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoPasantias().subscribe(
        (data: Practicas[]) => {
          this.pasantias = data;
          this.pasantia = this.pasantias.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
  }

  ngOnInit() {
    this.listar_carreras();
    this.listar_areas();
    this.listar_empresas();
    this.listar_convenios();
  }
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-pasantias"]);
  }

  put(myform: NgForm) {
    if (
      myform.valid == true &&
      this.validador == true &&
      this.validadorhora == true &&
      this.validadorhorasalida == true &&
      this.validarcupo == true &&
      this.validadorcumplir == true
    ) {
      this.servicio.actualizarPractica(this.pasantia).subscribe(
        (data) => {
          this.ruta.navigate(["/principal/list-pasantias"]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Pasantía actualizada correctamente",
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
        title: "Campos Obligatorios vacios o invalidos",
        showConfirmButton: true,
        //timer: 1800,
      });
    }
  }
  handleError(error) {
    this.error = error.error;
  }
  listar_convenios() {
    this.servicio.getListadoConvenios().subscribe((data) => {
      this.listconvenios = data;
    });
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
  listar_areas() {
    this.servicio.getListadoAreas().subscribe(
      (data) => {
        this.listarea = data;
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
  validarhora(event: any) {
    let horacorrecta = false;
    this.horas = event.target.value;
    if (
      this.horas.substring(0, 2).includes("23") ||
      this.horas.substring(0, 2).includes("00") ||
      this.horas.substring(0, 2).includes("01") ||
      this.horas.substring(0, 2).includes("02") ||
      this.horas.substring(0, 2).includes("03") ||
      this.horas.substring(0, 2).includes("04") ||
      this.horas.substring(0, 2).includes("05")
    ) {
      horacorrecta = false;
    } else {
      horacorrecta = true;
    }
    this.validadorhora = horacorrecta;
  }

  validarhorasalida(event: any) {
    let horacorrecta = false;
    this.horas = event.target.value;
    if (
      this.horas.substring(0, 2).includes("23") ||
      this.horas.substring(0, 2).includes("00") ||
      this.horas.substring(0, 2).includes("01") ||
      this.horas.substring(0, 2).includes("02") ||
      this.horas.substring(0, 2).includes("03") ||
      this.horas.substring(0, 2).includes("04") ||
      this.horas.substring(0, 2).includes("05")
    ) {
      horacorrecta = false;
    } else {
      horacorrecta = true;
    }
    this.validadorhorasalida = horacorrecta;
  }
  validarcupos(event: any) {
    this.cupos = event.target.value;
    let cupocorrecto = false;
    if (this.cupos > 20) {
      cupocorrecto = false;
    } else {
      cupocorrecto = true;
    }

    this.validarcupo = cupocorrecto;
  }
  validarcumplir(event: any) {
    this.cumplir = event.target.value;
    let cumplircorrecto = false;
    if (this.cumplir > 200) {
      cumplircorrecto = false;
    } else {
      cumplircorrecto = true;
    }

    this.validadorcumplir = cumplircorrecto;
  }
}
