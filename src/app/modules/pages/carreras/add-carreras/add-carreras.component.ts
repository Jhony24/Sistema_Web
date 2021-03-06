import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import Swal from "sweetalert2";
import { Carrera } from "../../models/Carrera";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-add-carreras",
  templateUrl: "./add-carreras.component.html",
  styleUrls: ["./add-carreras.component.css"],
})
export class AddCarrerasComponent implements OnInit {
  role = "";
  validarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ruta: Router,
    private servicio: ServiceService
  ) {
    this.servicio.getRoles().subscribe((data: any) => {
      this.role = data;
    });
  }

  ngOnInit() {
    this.validarForm = this.formBuilder.group({
      id: 0,
      nombrecarreras: ["", Validators.required],
      estadocarreras: ["1", Validators.required],
    });
  }
  onSubmit() {
    if (this.validarForm.valid) {
      this.servicio.crearCarrera(this.validarForm.value).subscribe((data) => {
        this.ruta.navigate(["/principal/list-carreras"]);
        Swal.fire("Registro de Carrera", "Satisfactorio!", "success");
      });
    } else {
      Swal.fire({
        position: "top",
        icon: "info",
        title: "Campos Obligatorios Vacíos o Inválidos",
        showConfirmButton: true,
      });
    }
  }
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-carreras"]);
  }
}
