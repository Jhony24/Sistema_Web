import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Area } from "../../models/Area";
import { Carrera } from "../../models/Carrera";
import { Convenio } from "../../models/Convenio";
import { Empresa } from "../../models/Empresa";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-add-pasantias",
  templateUrl: "./add-pasantias.component.html",
  styleUrls: ["./add-pasantias.component.css"],
})
export class AddPasantiasComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  listarea = new Array<Area>();
  listempresa = new Array<Empresa>();
  listconvenios = new Array<Convenio>();
  selectCarrera: string = "";
  selectArea: string = "";
  selectEmpresa: string = "";
  fechapractica: string = "";
  horas: string = "";
  public validador;
  public validadorhora = true;
  public validadorhorasalida = true;
  public error = <any>[];

  validarForm: FormGroup;
  constructor(
    private ruta: Router,
    private formBuilder: FormBuilder,
    private servicio: ServiceService
  ) {}

  ngOnInit() {
    this.listar_carreras();
    this.listar_areas();
    this.listar_empresas();
    this.listar_convenios();

    this.validarForm = this.formBuilder.group({
      id: 0,
      tipo_practica: ["2", Validators.required],
      cupos: ["", [Validators.required, Validators.min(1), Validators.max(20)]],
      horas_cumplir: [
        "",
        [Validators.required, Validators.min(1), Validators.max(200)],
      ],
      ciclo_necesario: [
        "",
        [Validators.minLength(3), Validators.maxLength(20)],
      ],
      fecha_inicio: ["", Validators.required],
      ppestado: ["1"],
      salario: [""],
      hora_entrada: [""],
      hora_salida: [""],
      modalidad: ["", Validators.required],
      idcarrera: [this.selectCarrera, Validators.required],
      idarea: [this.selectArea, Validators.required],
      idempresa: [this.selectEmpresa, Validators.required],
      actividades: ["", [Validators.minLength(20), Validators.maxLength(250)]],
      requerimientos: [
        "",
        [Validators.minLength(20), Validators.maxLength(250)],
      ],
    });
  }

  onSubmit() {
    if (
      this.validarForm.valid &&
      this.validador == true &&
      this.validadorhora == true &&
      this.validadorhorasalida == true
    ) {
      this.servicio.crearPractica(this.validarForm.value).subscribe(
        (data) => {
          this.ruta.navigate(["/principal/list-pasantias"]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Pasantia registrada correctamente",
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

  volver_lista(): void {
    this.ruta.navigate(["/principal/list-pasantias"]);
  }

  selectChangeHandler(event: any) {
    this.selectCarrera = event.target.value;
    this.selectArea = event.target.value;
    this.selectEmpresa = event.target.value;
  }

  selectChangeCarrera(event: any) {
    this.selectCarrera = event.target.value;
  }
  selectChangeArea(event: any) {
    this.selectArea = event.target.value;
  }
  selectChangeEmpresa(event: any) {
    this.selectEmpresa = event.target.value;
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
    console.log(this.horas.substring(0, 2));
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
    console.log(this.horas.substring(0, 2));
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

  get idcarrera() {
    return this.validarForm.get("idcarrera");
  }
  get idarea() {
    return this.validarForm.get("idarea");
  }
  get idempresa() {
    return this.validarForm.get("idempresa");
  }
  get cupos() {
    return this.validarForm.get("cupos");
  }
  get horas_cumplir() {
    return this.validarForm.get("horas_cumplir");
  }
  get ciclo_necesario() {
    return this.validarForm.get("ciclo_necesario");
  }

  get fecha_inicio() {
    return this.validarForm.get("fecha_inicio");
  }
  get hora_entrada() {
    return this.validarForm.get("hora_entrada");
  }
  get hora_salida() {
    return this.validarForm.get("hora_salida");
  }
  get actividades() {
    return this.validarForm.get("actividades");
  }
  get requerimientos() {
    return this.validarForm.get("requerimientos");
  }
}
