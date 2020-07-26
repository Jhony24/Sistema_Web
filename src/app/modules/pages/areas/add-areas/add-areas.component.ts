import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Carrera } from "../../models/Carrera";
import { AreaserviceService } from "../../services/areaservice.service";
import { CarreraserviceService } from "../../services/carreraservice.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-add-areas",
  templateUrl: "./add-areas.component.html",
  styleUrls: ["./add-areas.component.css"],
})
export class AddAreasComponent implements OnInit {
  validarForm: FormGroup;
  selectEstado: string = "";
  selectCarrera: string = "";
  listcarreras = new Array<Carrera>();

  opcionSeleccionado: string = "0"; // Iniciamos

  constructor(
    private formBuilder: FormBuilder,
    private ruta: Router,
    private servicioarea: AreaserviceService,
    private serviciocarrera: CarreraserviceService
  ) {}

  ngOnInit() {
    this.listar_carreras();

    this.validarForm = this.formBuilder.group({
      id: 0,
      nombrearea: ["", Validators.required],
      areaestado: ["1", Validators.required],
      idcarrera: [this.selectCarrera, Validators.required],
    });
  }

  onSubmit() {
    this.servicioarea.crearArea(this.validarForm.value).subscribe((data) => {
      this.ruta.navigate(["/principal/list-areas"]);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }

  volver_lista(): void {
    this.ruta.navigate(["/principal/list-areas"]);
  }

  listar_carreras() {
    this.serviciocarrera.getListadoCarreras().subscribe(
      (data) => {
        this.listcarreras = data;
        console.log("carreras", this.listcarreras);
      },
      (err) => {}
    );
  }

  selectChangeHandler(event: any) {
    this.selectCarrera = event.target.value;
  }

  selectChangeCarrera(event: any) {
    this.selectCarrera = event.target.value;
  }
}
