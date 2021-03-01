import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Carrera } from "../../models/Carrera";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-add-ficticio",
  templateUrl: "./add-ficticio.component.html",
  styleUrls: ["./add-ficticio.component.css"],
})
export class AddFicticioComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  selectCarrera: string = "";
  selectArea: string = "";
  userCarrera: string = "";
  selectEmpresa: string = "";
  fechapractica: string = "";
  validarForm: FormGroup;
  public error = <any>[];
  public validador;

  constructor(
    private ruta: Router,
    private formBuilder: FormBuilder,
    private servicio: ServiceService
  ) {
    this.servicio.getusercarrera().subscribe((data: any) => {
      this.userCarrera = data["nombrecarreras"];
    });
  }

  ngOnInit() {
    this.listar_carreras();
    this.validarForm = this.formBuilder.group({
      id: 0,
      estudianes_requeridos: ["", Validators.required],
      horas_cumplir: [""],
      fecha_inicio: ["", Validators.required],
      nombre_prficticio: ["", Validators.required],
      estadoficticio: ["1"],
      idcarrera: [this.selectCarrera, Validators.required],
      nombreempresa: [
        "",
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(150),
        ],
      ],
      nombrearea: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(80),
        ],
      ],
      actividades: ["", [Validators.minLength(20), Validators.maxLength(150)]],
      requerimiento: [
        "",
        [Validators.minLength(20), Validators.maxLength(150)],
      ],
    });
  }

  onSubmit() {
    if (this.validarForm.valid) {
      this.servicio.crearFicticio(this.validarForm.value).subscribe(
        (data) => {
          this.ruta.navigate(["/principal/list-proyecto_3ero"]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Proyecto registrado correctamente",
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
      });
    }
  }
  listar_carreras() {
    this.servicio.getListadoCarreras().subscribe(
      (data) => {
        this.listcarreras = data;
      },
      () => {}
    );
  }
  handleError(error) {
    this.error = error.error;
  }
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-proyecto_3ero"]);
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
  selectChangeCarrera(event: any) {
    this.selectCarrera = event.target.value;
  }
  get idcarrera() {
    return this.validarForm.get("idcarrera");
  }
  get estudianes_requeridos() {
    return this.validarForm.get("estudianes_requeridos");
  }
  get horas_cumplir() {
    return this.validarForm.get("horas_cumplir");
  }
  get fecha_inicio() {
    return this.validarForm.get("fecha_inicio");
  }
  get actividades() {
    return this.validarForm.get("actividades");
  }
  get requerimiento() {
    return this.validarForm.get("requerimiento");
  }
  get nombreempresa() {
    return this.validarForm.get("nombreempresa");
  }
  get nombrearea() {
    return this.validarForm.get("nombrearea");
  }
}
