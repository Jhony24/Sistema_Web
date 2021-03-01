import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Area } from "../../models/Area";
import { Carrera } from "../../models/Carrera";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-add-proyecto",
  templateUrl: "./add-proyecto.component.html",
  styleUrls: ["./add-proyecto.component.css"],
})
export class AddProyectoComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  listarea = new Array<Area>();
  selectCarrera: string = "";
  selectArea: string = "";
  validarForm: FormGroup;
  public error = <any>[];

  constructor(
    private ruta: Router,
    private formBuilder: FormBuilder,
    private servicio: ServiceService
  ) {}

  ngOnInit() {
    this.listar_areas();
    this.listar_carreras();

    this.validarForm = this.formBuilder.group({
      id: 0,
      nombre_prmacro: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      encargado: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      estadomacro: ["1"],
      descripcion: ["", [Validators.minLength(20), Validators.maxLength(250)]],
      idcarrera: [this.selectCarrera, Validators.required],
      idarea: [this.selectArea, Validators.required],
    });
  }

  onSubmit() {
    if (this.validarForm.valid) {
      this.servicio.crearProyectoMacro(this.validarForm.value).subscribe(
        (data) => {
          this.ruta.navigate(["/principal/list-proyecto"]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Proyecto Macro registrado correctamente",
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
  handleError(error) {
    this.error = error.error;
  }
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-proyecto"]);
  }

  listar_carreras() {
    this.servicio.getListadoCarreras().subscribe(
      (data) => {
        this.listcarreras = data;
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

  selectChangeCarrera(event: any) {
    this.selectCarrera = event.target.value;
  }
  selectChangeArea(event: any) {
    this.selectArea = event.target.value;
  }

  get nombreprmacro() {
    return this.validarForm.get("nombre_prmacro");
  }
  get encargado() {
    return this.validarForm.get("encargado");
  }
  get descripcion() {
    return this.validarForm.get("descripcion");
  }
  get idcarrera() {
    return this.validarForm.get("idcarrera");
  }
  get idarea() {
    return this.validarForm.get("idarea");
  }
}
