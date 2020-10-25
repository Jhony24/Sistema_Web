import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Carrera } from "../../models/Carrera";
import { Empresa } from "../../models/Empresa";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-add-empresas",
  templateUrl: "./add-empresas.component.html",
  styleUrls: ["./add-empresas.component.css"],
})
export class AddEmpresasComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  selectCarrera: string = "";
  validarForm: FormGroup;
  public error = <any>[];
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private ruta: Router,
    private formBuilder: FormBuilder,
    private servicio: ServiceService
  ) {}
  ngOnInit() {
    this.listar_carreras();

    this.validarForm = this.formBuilder.group({
      id: 0,
      nombreempresa: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      tipo_empresa: ["", Validators.required],
      nombrerepresentante: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
        ],
      ],
      ruc: ["", Validators.required],
      direccion: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(150),
        ],
      ],
      telefono: [""],
      correo: [
        "",
        [Validators.minLength(5), Validators.pattern(this.emailPattern)],
      ],
      actividades: ["", [Validators.minLength(20), Validators.maxLength(200)]],
      idcarrera: [this.selectCarrera, Validators.required],
      estadoempresa: ["1"],
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

  onSubmit() {
    if (this.validarForm.valid) {
      this.servicio.crearEmpresa(this.validarForm.value).subscribe(
        (data) => {
          this.ruta.navigate(["/principal/list-empresas"]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Empresa registrada correctamente",
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
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-empresas"]);
  }

  selectChangeHandler(event: any) {
    this.selectCarrera = event.target.value;
  }

  selectChangeCarrera(event: any) {
    this.selectCarrera = event.target.value;
  }

  get idcarrera() {
    return this.validarForm.get("idcarrera");
  }
  get nombreempresa() {
    return this.validarForm.get("nombreempresa");
  }
  get tipo_empresa() {
    return this.validarForm.get("tipo_empresa");
  }
  get nombrerepresentante() {
    return this.validarForm.get("nombrerepresentante");
  }
  get ruc() {
    return this.validarForm.get("ruc");
  }
  get direccion() {
    return this.validarForm.get("direccion");
  }
  get actividades() {
    return this.validarForm.get("actividades");
  }
  get correo() {
    return this.validarForm.get("correo");
  }
}
