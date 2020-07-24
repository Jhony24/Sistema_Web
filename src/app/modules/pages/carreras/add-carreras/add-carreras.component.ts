import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { CarreraserviceService } from "../../services/carreraservice.service";
import Swal from "sweetalert2";
import { Carrera } from "../../models/Carrera";

@Component({
  selector: "app-add-carreras",
  templateUrl: "./add-carreras.component.html",
  styleUrls: ["./add-carreras.component.css"],
})
export class AddCarrerasComponent implements OnInit {
  validarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ruta: Router,
    private servicioCarrera: CarreraserviceService
  ) {}

  ngOnInit() {
    this.validarForm = this.formBuilder.group({
      id: 0,
      nombrecarreras: ["", Validators.required],
      estadocarreras: ["1", Validators.required],
    });
  }
  onSubmit() {
    this.servicioCarrera
      .crearCarrera(this.validarForm.value)
      .subscribe((data) => {
        this.ruta.navigate(["/principal/list-carreras"]);
        Swal.fire("Registro de Carrera", "Satisfactorio!", "success");
      });
  }
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-carreras"]);
  }
}
