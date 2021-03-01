import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Area } from "../../models/Area";
import { Carrera } from "../../models/Carrera";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-edit-areas",
  templateUrl: "./edit-areas.component.html",
  styleUrls: ["./edit-areas.component.css"],
})
export class EditAreasComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  public prueba = null;

  area: Area = {
    nombrearea: null,
    areaestados: 1,
    idcarrera: null,
    nombrecarreras: null,
  };
  id: any;
  editing: boolean = false;
  areas: Area[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoAreas().subscribe(
        (data: Area[]) => {
          this.areas = data;
          this.area = this.areas.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
  }

  ngOnInit(): void {
    this.listar_carreras();
  }
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-areas"]);
  }

  put(myform: NgForm) {
    if (myform.valid == true) {
      this.servicio.actualizarArea(this.area).subscribe(
        (data) => {
          this.ruta.navigate(["/principal/list-areas"]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Área actualizada correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (err) => {
          console.log(err);
          this.handleError(err);
        }
      );
    } else {
      Swal.fire({
        position: "top",
        icon: "info",
        title: "Campos Obligatorios Vacíos o Inválidos",
        showConfirmButton: true,
        //timer: 1800,
      });
    }
  }
  handleError(error) {
    this.prueba = error.error;
    console.log("en el handle", this.prueba);
  }
  listar_carreras() {
    this.servicio.getListadoCarreras().subscribe(
      (data) => {
        this.listcarreras = data;
      },
      (err) => {}
    );
  }
}
