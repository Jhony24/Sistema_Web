import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Carrera } from "../../models/Carrera";
import Swal from "sweetalert2";
import { ServiceService } from "../../services/service.service";
import { style } from '@angular/animations';

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
  listerrores = new Array<String>();
  public error=<any>[];
  public prueba = null;

  opcionSeleccionado: string = "0"; // Iniciamos

  constructor(
    private formBuilder: FormBuilder,
    private ruta: Router,
    private servicio: ServiceService
  ) {
    this.validarForm = this.formBuilder.group({
      id: 0,
      nombrearea: ["", [Validators.required,Validators.minLength(10),Validators.maxLength(50)]],
      areaestado: ["1"],
      idcarrera: [this.selectCarrera, Validators.required],
    });
  }

  ngOnInit() {
    this.listar_carreras();
  }

  onSubmit() {
    if (this.validarForm.valid) {
      this.servicio.crearArea(this.validarForm.value).subscribe((data) => {
        this.ruta.navigate(["/principal/list-areas"]);
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Area registrada correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(this.listerrores);
      },(error)=>{
        this.handleError(error);
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
  handleError(error) {
    this.prueba = error.error;
    console.log("en el handle",this.prueba);
  }

  volver_lista(): void {
    this.ruta.navigate(["/principal/list-areas"]);
  }

  listar_carreras() {
    this.servicio.getListadoCarreras().subscribe(
      (data) => {
        this.listcarreras = data;
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

  get nombrearea() {
    return this.validarForm.get('nombrearea');
  }
  get idcarrera() {
    return this.validarForm.get('idcarrera');
  }
}
