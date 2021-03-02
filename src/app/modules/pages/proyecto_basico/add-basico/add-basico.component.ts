import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProyectoMacro } from "../../models/ProyectoMacro";
import { ServiceService } from "../../services/service.service";
import Swal from "sweetalert2";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Empresa } from "../../models/Empresa";
import { Convenio } from "../../models/Convenio";

@Component({
  selector: "app-add-basico",
  templateUrl: "./add-basico.component.html",
  styleUrls: ["./add-basico.component.css"],
})
export class AddBasicoComponent implements OnInit {
  selectEmpresa: string = "";
  fechapractica: string = "";
  fechapracticafina: string = "";
  public validador;
  public validador2;
  listmacro = new Array<ProyectoMacro>();
  validarForm: FormGroup;
  listempresa = new Array<Empresa>();
  listconvenios = new Array<Convenio>();
  public error = <any>[];

  macro: ProyectoMacro = {
    idarea: null,
    idcarrera: null,
    nombre_prmacro: null,
    encargado: null,
    descripcion: null,

    estadomacro: null,
  };
  id: any;
  editing: boolean = false;
  macros: ProyectoMacro[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router,
    private formBuilder: FormBuilder
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    console.log(this.id);
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoProyectoMacro().subscribe(
        (data: ProyectoMacro[]) => {
          this.macros = data;
          this.macro = this.macros.find((m) => {
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
    this.listar_convenios();

    this.validarForm = this.formBuilder.group({
      id: 0,
      idmacro: [this.id, Validators.required],
      idempresa: [this.selectEmpresa, Validators.required],
      nombre_prbasico: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      estudianes_requeridos: [
        "",
        [Validators.required, Validators.min(1), Validators.max(20)],
      ],
      ciclo: ["", [Validators.minLength(3), Validators.maxLength(20)]],
      horas_cumplir: [
        "",
        [Validators.required, Validators.min(1), Validators.max(200)],
      ],
      fecha_inicio: ["", Validators.required],
      modalidad: ["", Validators.required],
      actividades: ["", [Validators.minLength(20), Validators.maxLength(250)]],
      requerimientos: [
        "",
        [Validators.minLength(20), Validators.maxLength(250)],
      ],
      estadobasico: ["1"],
    });
  }

  changeCity(e) {
    console.log(e.value);
    this.idempresa.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  get cityName() {
    return this.validarForm.get("idempresa");
  }
  onSubmit() {
    if (this.validarForm.valid && this.validador == true) {
      this.servicio.crearProyectoBasico(this.validarForm.value).subscribe(
        (data) => {
          this.ruta.navigate(["/principal/list-proyecto"]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Proyecto Básico registrado correctamente",
            showConfirmButton: false,
            timer: 1500,
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
  handleError(error) {
    this.error = error.error;
  }

  volver_lista(): void {
    this.ruta.navigate(["/principal/list-proyecto"]);
  }
  listar_convenios() {
    this.servicio.getListadoConvenios().subscribe((data) => {
      this.listconvenios = data;
    });
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

  validarfechafinalizacion(event: any) {
    this.fechapracticafina = event.target.value;
    var fecha_actual;
    let fechaCorrecta = false;
    var f = new Date(this.fechapractica);
    var mes = (f.getMonth() + 1).toString();
    if (mes.length <= 1) {
      mes = "0" + mes;
    }
    var dia = f.getDate().toString();
    if (dia.length <= 1) {
      dia = "0" + dia;
    }
    fecha_actual = f.getFullYear() + "-" + mes + "-" + dia;

    if (this.fechapracticafina > fecha_actual) {
      fechaCorrecta = true;
    } else if (this.fechapracticafina == fecha_actual) {
      fechaCorrecta = false;
    } else if (this.fechapracticafina < fecha_actual) {
      fechaCorrecta = false;
    }

    this.validador2 = fechaCorrecta;
  }

  get idempresa() {
    return this.validarForm.get("idempresa");
  }

  get nonbre() {
    return this.validarForm.get("nombre_prbasico");
  }
  get estudianes_requeridos() {
    return this.validarForm.get("estudianes_requeridos");
  }
  get fecha_inicio() {
    return this.validarForm.get("fecha_inicio");
  }
  get fecha_fin() {
    return this.validarForm.get("fecha_fin");
  }
  get actividades() {
    return this.validarForm.get("actividades");
  }
  get requerimientos() {
    return this.validarForm.get("requerimientos");
  }
  get horastotales() {
    return this.validarForm.get("horas_cumplir");
  }
  get ciclo() {
    return this.validarForm.get("ciclo");
  }
}
