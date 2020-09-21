import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Area } from "../../models/Area";
import { Carrera } from "../../models/Carrera";
import { Empresa } from "../../models/Empresa";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-add-practicas",
  templateUrl: "./add-practicas.component.html",
  styleUrls: ["./add-practicas.component.css"],
})
export class AddPracticasComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  listarea = new Array<Area>();
  listempresa = new Array<Empresa>();
  selectCarrera: string = "";
  selectArea: string = "";
  selectEmpresa: string = "";
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

    this.validarForm = this.formBuilder.group({
      id: 0,
      tipo_practica: ["1"],
      cupos: ["", Validators.required],
      horas_cumplir: [""],
      ciclo: [""],
      fecha_inicio: ["", Validators.required],
      hora_entrada: [""],
      hora_salida: [""],
      ppestado: ["1"],
      idcarrera: [this.selectCarrera, Validators.required],
      idarea: [this.selectArea, Validators.required],
      idempresa: [this.selectEmpresa, Validators.required],
      actividades:["",[Validators.minLength(20),Validators.maxLength(150)]],
      requerimiento:["",[Validators.minLength(20), Validators.maxLength(150)]]
    });
  }

  onSubmit() {
    if (this.validarForm.valid) {
      this.servicio.crearPractica(this.validarForm.value).subscribe((data) => {
        this.ruta.navigate(["/principal/list-practicas-profesionales"]);
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Practica Pre-Profesional registrada correctamente",
          showConfirmButton: false,
          timer: 1800,
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
    this.ruta.navigate(["/principal/list-practicas-profesionales"]);
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
  get fecha_inicio() {
    return this.validarForm.get("fecha_inicio");
  }
  get actividades(){
    return this.validarForm.get("actividades");
  }
  get requerimiento(){
    return this.validarForm.get("requerimiento");
  }
  
}
