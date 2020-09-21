import { NullTemplateVisitor } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProyectoMacro } from "../../models/ProyectoMacro";
import { ProyectoBasico } from "../../models/ProyectoBasico";
import { ServiceService } from "../../services/service.service";
import Swal from "sweetalert2";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Empresa } from "../../models/Empresa";

@Component({
  selector: "app-add-basico",
  templateUrl: "./add-basico.component.html",
  styleUrls: ["./add-basico.component.css"],
})
export class AddBasicoComponent implements OnInit {
  selectEmpresa: string = "";
  listmacro = new Array<ProyectoMacro>();
  validarForm: FormGroup;
  listempresa = new Array<Empresa>();

  macro: ProyectoMacro = {
    
    idarea: null,
    idcarrera: null,
    nombre_prmacro: null,
    encargado: null,
    descripcion: null,
    estadomacro: null,
  };
  id: any;
  demo = this.macro.id;
  macro_id: number;
  editing: boolean = false;
  macros: ProyectoMacro[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router,
    private formBuilder: FormBuilder
  ) {
    this.id = this.activateRote.snapshot.params["id"];
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

    this.validarForm = this.formBuilder.group({
      id: 0,
      idmacro: [this.id],
      idempresa: ["", Validators.required],
      nombre_prbasico: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
      estudianes_requeridos: ["", Validators.required],
      ciclo: [""],
      horas_cumplir: [""],
      fecha_inicio: ["", Validators.required],
      fecha_fin: [""],
      actividades: ["", [Validators.minLength(10), Validators.maxLength(200)]],
      requerimientos: [
        "",
        [Validators.minLength(10), Validators.maxLength(200)],
      ],
      estadobasico: ["1"],
    });
  }

  changeCity(e) {
    console.log(e.value)
    this.idempresa.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get cityName() {
    return this.validarForm.get('idempresa');
  }
  onSubmit() {
    if (this.validarForm.valid) {
      this.servicio
        .crearProyectoBasico(this.validarForm.value)
        .subscribe((data) => {
          this.ruta.navigate(["/principal/list-proyecto"]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Proyecto Basico registrado correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      Swal.fire({
        position: "top",
        icon: "info",
        title: "Campos Obligatorios Vacios o Invalidos",
        showConfirmButton: true,
      });
    }
  }

  volver_lista(): void {
    this.ruta.navigate(["/principal/list-proyecto"]);
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
    console.log(event.value);
    this.selectEmpresa = event.target.value;
  }

  get idempresa() {
    return this.validarForm.get("idempresa");
  }
  
  get nonbre() {
    return this.validarForm.get("nombre_prbasico");
  }
  get estudiantes() {
    return this.validarForm.get("estudianes_requeridos");
  }
  get fecha_inicio() {
    return this.validarForm.get("fecha_inicio");
  }
  get actividades() {
    return this.validarForm.get("actividades");
  }
  get requerimientos() {
    return this.validarForm.get("requerimientos");
  }
}
